<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\IssueController;

use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/Welcome', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/features', function () {
    return Inertia::render('Features');
})->name('features');

Route::get('/help', function () {
    return Inertia::render('Help');
})->name('help');

Route::get('/dashboard', [DashboardController::class,'index'])
->name('dashboard');
Route::middleware(['auth', 'verified'])->group(function() {
    Route::resource('issue', IssueController::class);
});
Route::middleware(['auth', 'verified'])-> group(function(){
    Route:: get('/dashboard', fn ()=> Inertia :: render ('Dashboard'))
    ->name('dashboard');
    Route ::resource ('Project', ProjectController::class);
    Route ::resource ('Issue', IssueController::class);
    Route ::resource ('User', UserController::class);
   
});
Route :: resource('project', ProjectController::class);
Route::delete('/user/{id}', [UserController::class, 'destroy'])->name('user.destroy');
Route::post('/user', [UserController::class, 'store'])->name('user.store');
Route::get('/user', [UserController::class, 'index'])->name('user.index');
Route::get('/user/create', [UserController::class, 'create'])->name('user.create');
Route::get('/user/edit', [UserController::class, 'edit'])->name('user.edit');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
