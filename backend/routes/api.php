<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// routes api frontend
Route::group(['prefix'=>'v1','namespace'=>'Api\V1\Frontend'],function(){


    //posts
    Route::group(['prefix'=>'posts'],function(){
        Route::get('/','PostController@index');
        Route::get('show/{id}','PostController@show');
        Route::post('create','PostController@create');
        Route::patch('update/{id}','PostController@update');
        Route::delete('delete/{id}','PostController@delete');
    });

});

