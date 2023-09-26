<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class com_postt extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'nom',
        'commontaire',
        'id_post'
    ];
}
