<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Post;
use Redirect;
use DB;

class PostsController extends Controller
{

    public function index()
    {
        $posts = DB::select(DB::raw("SELECT * FROM posts ORDER BY created_at"));
        return view('index')->with('posts', $posts);
    }

    public function create(Request $request)
    {
        // php artisan storage:link
        // npm install csrf

        // Save Image

        // Handle file upload
        if($request->hasFile('post_img')){
            // Get filename with the extension
            // $fileNameWithExt = $request->input('post_img');
            $fileNameWithExt = $request->file('post_img')->getClientOriginalName();
            // Get just filename
            $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('post_img')->getClientOriginalExtension();
            // Filename to store
            $fileNameToStore = $filename.'_'.time().'.'.$extension;
            // Upload Image'
            $path = $request->file('post_img')->storeAs('public/post_images', $fileNameToStore);
        }
        else{
            $fileNameToStore = 'noimage.jpg';
        }


        $post = new Post;
        $post->user_id = 1;
        $post->image = $request->input('post_img');
        $post->title = $request->input('post_header');
        $post->text = $request->input('post_body');
        $post->likes = "0";
        $post->dislikes = "0";
        $post->save();

        $post_id = $post->id;

        



        return Redirect::to('/thread/'. $post_id);

        // return redirect('thread');

        // $data = [($request->input('post_header')), ($request->input('post_body')), ($request->input('post_img'))];

        // return view('test2')->with('data', $data);
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
        return view('thread')->with('comments', $comments)->with('post', $post)->with('post_id', $post_id);
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

        return Redirect::to('/thread/'. $post_id);
    }

    public function update(Request $request, $id)
    {
      
    }

    public function destroy($id)
    {
        //
    }

    public function test() {
        return view('test');
    }
}
