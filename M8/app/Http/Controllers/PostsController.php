<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Redirect;
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
        $postUser = User::all();
        $comments = array();
        foreach($posts as $post) {
            $comments[] = DB::select(DB::raw("SELECT * FROM comments WHERE post_id = $post->id ORDER BY likes LIMIT 2"));
        }
        return view('index')->with('postUser', $postUser)->with('posts', $posts)->with('comments', $comments)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function create(Request $request)
    {

        $posts = DB::select(DB::raw("SELECT * FROM posts ORDER BY created_at"));

        if(!$request->input('post_body') || !$request->input('post_header')) {
            return Redirect::to('/create')->with(["globalData" => collect(['user' => Auth::user()])])->with('error_message', 'Header and/or Body Text must be filled out.');
        }
        $post = new Post;
        $post->user_id = $request->input('user_id');
        $post->image = $request->input('post_img');
        $post->title = $request->input('post_header');
        $post->text = $request->input('post_body');
        $post->likes = "0";
        $post->dislikes = "0";
        $post->save();

        $post_id = $post->id;

        return Redirect::to('/thread/'. $post_id)->with(["globalData" => collect(['user' => Auth::user()])])->with('posts', $posts)->with('success_message', 'Post Created!');

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
        $user = DB::select(DB::raw("SELECT * FROM users"));
        $posts = DB::select(DB::raw("SELECT * FROM posts ORDER BY created_at"));

        $postUser = User::all();

        $post = Post::find($post_id);
        $comments = DB::select(DB::raw("SELECT * FROM comments WHERE post_id = $post_id"));
        return view('thread')->with('postUser', $postUser)->with('user', $user)->with('comments', $comments)->with('post', $post)->with('posts', $posts)->with('post_id', $post_id)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $post_id)
    {
        if(!$request->input('post_body') || !$request->input('post_header')) {
            return Redirect::to('/edit/'. $post_id)->with(["globalData" => collect(['user' => Auth::user()])])->with('error_message', 'Header and/or Body Text must be filled out.');
        }

        $posts = DB::select(DB::raw("SELECT * FROM posts ORDER BY created_at"));

        $post = Post::find($post_id);
        $post->image = $request->input('post_img');
        $post->title = $request->input('post_header');
        $post->text = $request->input('post_body');
        $post->save();

        return Redirect::to('/thread/'. $post_id)->with(["globalData" => collect(['user' => Auth::user()])])->with('posts', $posts)->with('success_message', 'Post Updated!');
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
        return Redirect::to('/')->with(["globalData" => collect(['user' => Auth::user()])])->with('error_message', 'Post Deleted!');
    }

    public function ratePost(Request $request) {
        $user_id = intval($request->input('user_id'));
        $post_id = intval($request->input('post_id'));
        $value = intval($request->input('likes'));

        $exists = DB::select("SELECT COUNT(1) FROM post_likes WHERE user_id = $user_id AND post_id = $post_id AND value=$value");
        $exists = json_decode(json_encode($exists), true);
        $exists = $exists[0]["COUNT(1)"];
        if($exists == 1) {
            DB::statement("DELETE FROM post_likes WHERE user_id = $user_id AND post_id = $post_id AND value = $value");
        }
        if($exists == 0) {
            DB::statement("INSERT INTO post_likes (user_id, post_id, value) VALUES ($user_id, $post_id, $value) ON DUPLICATE KEY UPDATE value=$value");
        }

        // DB::statement("DELETE FROM post_likes WHERE user_id = ")
        // DB::statement("IF EXISTS(SELECT * FROM post_likes WHERE user_id = $user_id AND post_id = $post_id) THEN DELETE FROM ");
        // DB::statement("DELETE FROM post_likes WHERE user_id = $user_id AND post_id = $post_id AND value = $value");
        
        return response()->json(['user_id' => $user_id, 'post_id' => $post_id, 'value' => $value, 'exists' => $exists]);
    }

    public function setLiked(Request $request) {
        $user_id = intval($request->input('user_id'));
        $post_id = intval($request->input('post_id'));

        $value = DB::select("SELECT value FROM post_likes WHERE user_id = $user_id AND post_id = $post_id LIMIT 1");
        $value = json_decode(json_encode($value), true);
        if(!empty($value)) {
            $value = $value[0]["value"];
        } else {
            $value = null;
        }

        return response()->json(['value' => $value]);
    }

    public function test() {
        return view('test');
    }
}
