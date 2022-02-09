<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\PagesController;
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

Route::get('/', [PostsController::class, 'index']);

Route::get('/thread', [PagesController::class, 'thread']);

Route::get('/login', [PagesController::class, 'login']);

Route::get('/register', [PagesController::class, 'register']);

Route::get('/profile', [PagesController::class, 'profile']);

Route::get('/create', [PagesController::class, 'create']);

Route::get('/edit/{post_id}', [PagesController::class, 'edit']);



Route::get('/test', [PagesController::class, 'test']);

// Route::get('/test', [CommentsController::class, 'store']);

Route::get('/test2', function () {
    return view('test2');
});

Route::get('/comment/{post_id}', [CommentsController::class, 'store']);

Route::get('thread/{post_id}', [PostsController::class, 'show']);

Route::get('/createPost', [PostsController::class, 'create']);
// Route::post('/createPost', [PostsController::class, 'create']);

Route::get('/editPost/{post_id}', [PostsController::class, 'edit']);

Route::get('/changeImage/{user_id}', [PagesController::class, 'userImage']);

Auth::routes();
