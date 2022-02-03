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

Route::get('/', [PagesController::class, 'index']);

Route::get('/thread', [PagesController::class, 'thread']);

Route::get('/login', [PagesController::class, 'login']);

Route::get('/register', [PagesController::class, 'register']);

Route::get('/profile', [PagesController::class, 'profile']);

Route::get('/create', [PagesController::class, 'create']);

Route::get('/edit', [PagesController::class, 'edit']);



Route::get('/test', [PagesController::class, 'test']);

Route::get('/thread', function () {
    return view('edit');
});

// Route::get('/test', [CommentsController::class, 'store']);

Route::get('/test2', function () {
    return view('test2');
});

Route::get('/comment', [CommentsController::class, 'store']);

// Route::resource('test', PostsController::class);