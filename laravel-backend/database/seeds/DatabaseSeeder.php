<?php

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(\App\Models\User::class,1)->create()->each(function($user){
            $user->tasks()->saveMany(factory(App\Models\Taskmanager\Task::class, 10)->make());
        });
        $this->call(WorksTableSeeder::class);
        $this->call(StatusesTableSeeder::class);
        
    }
}
