<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Post;
use Redirect;
use App\Models\User;
use DB;

class PostsController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }

    public function index()
    {
        $posts = DB::select(DB::raw("SELECT * FROM posts ORDER BY created_at"));
        $comments = array();
        foreach($posts as $post) {
            $comments[] = DB::select(DB::raw("SELECT * FROM comments WHERE post_id = $post->id ORDER BY likes LIMIT 2"));
        }
        return view('index')->with('posts', $posts)->with('comments', $comments)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function create(Request $request)
    {
        $post = new Post;
        $post->user_id = $request->input('user_id');
        $post->image = $request->input('post_img');
        $post->title = $request->input('post_header');
        $post->text = $request->input('post_body');
        $post->likes = "0";
        $post->dislikes = "0";
        $post->save();

        $post_id = $post->id;

        return Redirect::to('/thread/'. $post_id)->with(["globalData" => collect(['user' => Auth::user()])]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($post_id)
    {
        $post = Post::find($post_id);
        $comments = DB::select(DB::raw("SELECT * FROM comments WHERE post_id = $post_id"));
        return view('thread')->with('comments', $comments)->with('post', $post)->with('post_id', $post_id)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $post_id)
    {

        $post = Post::find($post_id);
        $post->image = $request->input('post_img');
        $post->title = $request->input('post_header');
        $post->text = $request->input('post_body');
        $post->save();

        return Redirect::to('/thread/'. $post_id)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function update(Request $request, $id)
    {
      
    }

    public function destroy($post_id)
    {

        $comments = DB::select(DB::raw("SELECT * FROM comments WHERE post_id = $post_id"));

        foreach($comments as $comment){
            // $comment->id
            Comment::find($comment->id)->delete();
        }

        Post::find($post_id)->delete();
        return view('/')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function ratePost(Request $request) {
        $user_id = intval($request->input('user_id'));
        $post_id = intval($request->input('post_id'));
        $value = intval($request->input('likes'));

        DB::statement("INSERT INTO post_likes (user_id, post_id, value) VALUES ($user_id, $post_id, $value) ON DUPLICATE KEY UPDATE value=$value");
        return response()->json(['user_id' => $user_id, 'post_id' => $post_id, 'value' => $value]);
    }

    public function test() {
        return view('test');
    }
}
