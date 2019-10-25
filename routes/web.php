<?php

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

Auth::routes();

Route::group(['middleware' => 'auth', 'prefix' => 'api'], function() {
    Route::apiResources([
        'users' => 'UserController',
        'posts' => 'PostController',
        'ratings' => 'RatingController',
    ]);
});

Route::get('/{any}', 'AppController@index')->where('any', '.*');
