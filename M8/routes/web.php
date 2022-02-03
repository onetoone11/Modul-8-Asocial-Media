<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\PostsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/test', function () {
//     return view('test');
// });

Route::get('/login', function () {
    return view('login');
});

Route::get('/create', function () {
    return view('create');
});

Route::get('/edit', function () {
    return view('edit');
});

Route::get('/register', function () {
    return view('register');
});

Route::get('/test', [CommentsController::class, 'index']);

Route::get('/thread', function () {
    return view('edit');
});

// Route::get('/test', [CommentsController::class, 'store']);

Route::get('/test2', function () {
    return view('test2');
});

Route::get('/comment', [CommentsController::class, 'store']);

// Route::resource('test', PostsController::class);