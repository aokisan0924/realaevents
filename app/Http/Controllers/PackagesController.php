<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PackagesController extends Controller
{
    public function wedding()
    {
        return Inertia::render('packages/Wedding');
    }

    public function birthday()
    {
        return Inertia::render('packages/Birthday');
    }

    public function debut()
    {
        return Inertia::render('packages/Debut');
    }
}
