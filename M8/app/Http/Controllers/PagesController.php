<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Redirect;
use DB;


class PagesController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['thread']]);
    }

    public function thread(){
        return view('thread')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function profile(){
        // Måste ändras
        $user_id = Auth::id();
        $user = User::find($user_id);
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

        // if(Auth::id() ==)
        
        return view('edit')->with('data', $data)->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function test(){
        return view('test')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function userImage(Request $request, $user_id){

        $user = User::find($user_id);
        $user->img = $request->input('profile_img');
        $user->save();

        return Redirect::to('/profile')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function users(){

        $usersTable = DB::table('users')->get();
        return view('users')->with(["globalData" => collect(['user' => Auth::user()])])->with('usersTable', $usersTable);
    }

    public function deleteUser($user_id){

        User::find($user_id)->delete();

        return Redirect::to('/users')->with(["globalData" => collect(['user' => Auth::user()])]);
    }

    public function adminUser($user_id){

        $user = User::find($user_id);
        $user->type = 'admin';
        $user->save();

        return Redirect::to('/users')->with(["globalData" => collect(['user' => Auth::user()])]);

    }

}
