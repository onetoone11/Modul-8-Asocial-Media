<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Comment;
use Redirect;
use Illuminate\Support\Facades\Auth;

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
        // $post_id = 1;
        $comment = new Comment;
        $comment->post_id = $post_id;
        $comment->user_id = null;
        $comment->text = $request->input('text');
        $comment->likes = "0";
        $comment->parent_comment_id = $request->input('parent_id');
        $comment->save();

        return Redirect::to('/thread/'. $post_id)->with(["globalData" => collect(['user' => Auth::user()])]);
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
        $comment_id = $request->input('comment_id');
        $user_id = $request->input('user_id');

        $exists = DB::statement("SELECT COUNT(1) FROM comment_likes WHERE user_id = $user_id AND comment_id = $comment_id");
        if($exists == 1) {
            DB::statement("DELETE FROM comment_likes WHERE user_id = $user_id AND comment_id = $comment_id");
        } elseif ($exists == 0) {
            DB::statement("INSERT INTO comment_likes (user_id, comment_id) VALUES ($user_id, $comment_id)");
        }

        return response();
    }
}
