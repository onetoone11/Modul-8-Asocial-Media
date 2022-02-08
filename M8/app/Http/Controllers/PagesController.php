<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Post;
use App\Models\User;

class PagesController extends Controller
{

    public function index(){
        return view('index');
    }

    public function thread(){
        return view('thread');
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
        return view('profile')->with('user', $user)->with('posts', $posts)->with('comments', $comments);
    }

    public function create(){
        return view('create');
    }

    public function edit($post_id){
        $data = Post::find($post_id);
        return view('edit')->with('data', $data);
    }

    public function register(){
        return view('register');
    }

    public function test(){
        return view('test');
    }

}
