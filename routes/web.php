<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});


Route::get('/about', function () {

    return view('about', ['nama' => 'Iszya']);
});

Route::get('/profil', function () {
    return view('profil');
});

Route::get('/contact', function () {
    return view('contact');
});
