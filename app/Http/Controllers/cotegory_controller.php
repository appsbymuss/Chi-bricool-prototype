<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\category_metier;

class cotegory_controller extends Controller
{
    public function index()
    {
        return category_metier::all();
    }
}
