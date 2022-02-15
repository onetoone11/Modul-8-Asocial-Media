<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Comment;
use Redirect;

use DB;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::select(DB::raw("SELECT * FROM comments"));

        return view('test')->with('data', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $post_id)
    {
        $posts = DB::select(DB::raw("SELECT * FROM posts ORDER BY created_at"));

        // $post_id = 1;
        $comment = new Comment;
        $comment->post_id = $post_id;
        $comment->user_id = Auth::user()['id'];
        $comment->text = $request->input('text');
        $comment->likes = "0";
        $comment->parent_comment_id = $request->input('parent_id');
        $comment->save();

        return Redirect::to('/thread/'. $post_id)->with(["globalData" => collect(['user' => Auth::user()])])->with('posts', $posts)->with('success_message', 'Comment Added!');
        // return view('index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, $id)
    // {
    //     //
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    //rating

    public function rateComment(Request $request) {
        $comment_id = intval($request->input('comment_id'));
        $user_id = intval($request->input('user_id'));

        $exists = DB::select("SELECT COUNT(1) FROM comment_likes WHERE user_id = $user_id AND comment_id = $comment_id");
        $exists = json_decode(json_encode($exists), true);
        $exists = $exists[0]["COUNT(1)"];

        if($exists == 1) {
            DB::statement("DELETE FROM comment_likes WHERE user_id = $user_id AND comment_id = $comment_id");
        } elseif ($exists == 0) {
            DB::statement("INSERT INTO comment_likes (user_id, comment_id) VALUES ($user_id, $comment_id)");
        }

        return response()->json(['user_id' => $user_id, 'comment_id' => $comment_id, 'exists' => $exists]);
    }

    public function setLikedComment(Request $request) {
        $comment_id = intval($request->input('comment_id'));
        $user_id = intval($request->input('user_id'));

        $exists = DB::select("SELECT COUNT(1) FROM comment_likes WHERE user_id = $user_id AND comment_id = $comment_id");
        $exists = json_decode(json_encode($exists), true);
        $exists = $exists[0]["COUNT(1)"];

        if($exists == 1) {
            return response()->json(['exists' => true]);
        }
        if($exists == 0) {
            return response()->json(['exists' => false]);
        }

    }
}
