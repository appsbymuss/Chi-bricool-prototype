<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\client_controller;
use App\Http\Controllers\bricoleur_controller;

use App\Http\Controllers\post_controller;

use App\Http\Controllers\Post_Bricoleur_Controller;
use App\Http\Controllers\login_controller;
use App\Http\Controllers\comon_post;
use App\Http\Controllers\cotegory_controller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/create_client',[UserController::class, 'store']);
Route::get('/view_client',[UserController::class, 'index']);
Route::get('search_C/{search}',[UserController::class, 'search_cli']);
Route::delete('view_del_client/{id}',[UserController::class, 'destroy']);
Route::post('/create_post_user',[post_controller::class, 'store']);
Route::get('/view_post_client',[post_controller::class, 'index']);
Route::get('posts_metier/{metier}',[post_controller::class, 'find_metier']);
Route::get('/view_post_clientt/{id}',[post_controller::class, 'indexx']);
Route::delete('delet_post_client/{id}',[post_controller::class, 'destroy']);
Route::delete('deletclient/{id}',[UserController::class, 'destroy']);
Route::get('/show_post_client/{id}',[post_controller::class, 'show']);
Route::get('/show_client/{id}',[UserController::class, 'show_client']);
Route::put('/update_post_client/{id}',[post_controller::class, 'update']);
// Route::put('/update_client/{client}',[post_controller::class, 'update_client']);
Route::get('/Ditai_post_client/{id_client}',[UserController::class, 'Detai_post']);



Route::post('/create_bricoleur',[UserController::class, 'store']);
Route::post('/create_post_bri',[post_controller::class, 'storee']);
Route::get('/view_post_bricoleur',[post_controller::class, 'index']);
Route::get('/view_post_bricoleurr/{id}',[post_controller::class, 'indexx']);
Route::get('search_B/{search}',[UserController::class, 'search']);
Route::get('search_BB/{search}',[UserController::class, 'searchh']);
Route::get('search_BBB/{search}',[UserController::class, 'searchhh']);
Route::delete('/delet_post_bricoleur/{id}',[post_controller::class, 'destroy']);
Route::delete('/deletbricoleur/{id}',[UserController::class, 'destroy']);
Route::get('/show_post_bricoleur/{id}',[post_controller::class, 'show']);
Route::get('/show_bricoleur/{id}',[UserController::class, 'show_brioleur']);
Route::put('/update_post_bricoleur/{id}',[post_controller::class, 'update']);
Route::get('/view_bricoleur',[UserController::class, 'index']);
Route::get('/post_bricoleur/{id}',[post_controller::class, 'find_post']);
// Route::get('/information_bricoleurr/{id_b}',[UserController::class, 'find_bricoleur']);
Route::delete('view_del_bricoleur/{id}',[UserController::class, 'destroy']);
Route::get('/Ditai_post_bricoleur/{id_bricoleur}',[UserController::class, 'Detai_post']);

Route::post('/create_commonet',[comon_post::class, 'create_commonet']);
Route::get('/commontaire_posts/{id}',[comon_post::class, 'commonet_post']);


Route::get('/all_metier',[cotegory_controller::class, 'index']);


// Public Routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/send-reset-password-email', [PasswordResetController::class, 'send_reset_password_email']);
Route::post('/reset-password/{token}', [PasswordResetController::class, 'reset']);

// Protected Routes
Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/loggeduser', [UserController::class, 'logged_user']);
    Route::post('/changepassword', [UserController::class, 'change_password']);
});