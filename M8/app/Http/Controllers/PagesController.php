<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Post;
use App\Models\User;
use Redirect;
// use App\Http\Controllers\Auth;
// use Auth;
use Illuminate\Support\Facades\Auth;

class PagesController extends Controller
{

    public function index(){
        return view('index')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function thread(){
        return view('thread')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function login(){
        return view('login');
    }

    public function profile(){
        // Måste ändras
        $user_id = 1;
        $user = User::find(11);
        $posts = DB::select(DB::raw("SELECT * FROM posts WHERE user_id = $user_id ORDER BY created_at"));
        $comments = array();
        foreach($posts as $post) {
            $comments[] = DB::select(DB::raw("SELECT * FROM comments WHERE post_id = $post->id ORDER BY likes LIMIT 2"));
        }
        return view('profile')->with('user', $user)->with('posts', $posts)->with('comments', $comments)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function create(){
        return view('create')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function edit($post_id){
        $data = Post::find($post_id);
        return view('edit')->with('data', $data)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function register(){
        return view('register');
    }

    public function test(){
        return view('test')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function userImage(request $request, $user_id){

        $user = User::find($user_id);
        $user->image = $request->input('post_img');
        $user->save();

        return view('profile');
    }

}
