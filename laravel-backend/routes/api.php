<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    // return $request->user();
    dd('hello');
});

Route::group(['namespace' => 'Api'], function () {
    Route::apiResource('tasks', 'Taskmanager\TaskController');
    Route::apiResource('orders', 'Vakademe\OrderController');
    Route::apiResource('works', 'Vakademe\WorkController');
    Route::group(['namespace' => 'Auth'], function () {
        Route::post('register', 'RegisterController@register');
        Route::post('login', 'LoginController@login');
        Route::post('logout', 'LogoutController')->middleware('auth:api');
        
    });
});
