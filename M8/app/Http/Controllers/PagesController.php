<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

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
        return view('profile');
    }

    public function create(){
        return view('create');
    }

    public function edit(){
        return view('edit');
    }

    public function register(){
        return view('register');
    }

    public function test(){
        return view('test');
    }

}
