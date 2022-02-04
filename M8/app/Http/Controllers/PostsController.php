<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Post;

class PostsController extends Controller
{

    public function index()
    {
        //
    }

    public function create(Request $request)
    {
        $post = new Post;
        $post->user_id = 1;
        $post->image = $request->input('post_img');
        $post->title = $request->input('post_header');
        $post->text = $request->input('post_body');
        $post->likes = "0";
        $post->dislikes = "0";
        $post->save();

        return redirect('thread');

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
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $post_id)
    {

        // $id = 1;

        $post = Post::find($post_id);
        $post->user_id = 1;
        $post->image = $request->input('post_img');
        $post->title = $request->input('post_header');
        $post->text = $request->input('post_body');
        $post->likes = "0";
        $post->dislikes = "0";
        $post->save();

        return redirect('thread');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

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

    public function test() {
        return view('test');
    }
}
