<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Taskmanager\Task;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    return [
        
        'name' => $faker->text(20),
        




        
    ];
});
