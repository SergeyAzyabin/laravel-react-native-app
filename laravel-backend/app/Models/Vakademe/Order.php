<?php

namespace App\Models\Vakademe;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //

    protected $fillable=['status_name','user_id','price','comment','work_name'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function work()
    {
        return $this->hasOne(Work::class);
    }
    public function status()
    {
        return $this->hasOne(Status::class);
    }

}
