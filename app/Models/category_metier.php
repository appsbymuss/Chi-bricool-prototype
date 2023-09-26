<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class category_metier extends Model
{
    use HasFactory;

    protected $fillable = [
        'metier',
    ];
}
