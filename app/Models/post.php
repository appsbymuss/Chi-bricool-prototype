<?php

namespace App\Models;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class post extends Model
{
    use HasFactory;
    protected $table = 'posts';

    protected $fillable = [
        'title',
        'description',
        'date',
        'metier',
        'user_id'
    ];

    public function post(){
        return $this->belongsTo(User::class);
    }
}
