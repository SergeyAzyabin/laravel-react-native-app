<?php

namespace App\Models\Taskmanager;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    //
    use SoftDeletes;
    protected $fillable = ['name'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
