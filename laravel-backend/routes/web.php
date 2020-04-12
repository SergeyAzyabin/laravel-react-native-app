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

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/', 'KabinetController@index')->name('kabinet');

Route::resource('orders', 'Vakademe\OrderController');

// Route::get('/orders', 'Vakademe\OrdersController@index');
// Route::group(['namespace' => 'Api'], function () {
//     Route::apiResource('tasks', 'Taskmanager\TaskController');
//     Route::group(['namespace' => 'Auth'], function () {
//         Route::post('register', 'RegisterController@register');
//         Route::post('login', 'LoginController@login');
//         Route::post('logout', 'LogoutController')->middleware('auth:api');
        
//     });
// });