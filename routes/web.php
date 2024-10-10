<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route for Home Page
Route::get('/',[HomeController::class, 'index'])->name('home');

// Route for About Page
Route::get('/about', [AboutUsController::class, 'index'])->name('about');

// Routes for Packages
Route::get('/packages/wedding', [PackagesController::class, 'wedding'])->name('wedding');
Route::get('/packages/birthday', [PackagesController::class, 'birthday'])->name('birthday');
Route::get('/packages/debut', [PackagesController::class, 'debut'])->name('debut');

// Route for Contact
Route::get('/contact', [ContactController::class, 'index'])->name('contact');

// Rout for Gallery
Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
