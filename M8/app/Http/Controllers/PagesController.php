<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Post;
// use App\Http\Controllers\Auth;
use Auth;
use App\Models\User;

class PagesController extends Controller
{

    public function index(){
        $data = "hello";
        return view('index')->with('data', $data)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function thread(){
        return view('thread')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function login(){
        return view('login');
    }

    public function profile(){
        return view('profile')->with(["globalData" => collect(['user' => Auth::user()])]);
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

}
