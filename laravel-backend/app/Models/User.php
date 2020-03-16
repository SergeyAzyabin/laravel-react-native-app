<?php

namespace App\Models;


use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Taskmanager\Task;
use App\Models\Vakademe\Order;




class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    
    const ROLE_USER = 1;
    const ROLE_ADMIN = 10;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
    public function isAdmin(): bool
    {
        return $this->role === self::ROLE_ADMIN;
    }
}
