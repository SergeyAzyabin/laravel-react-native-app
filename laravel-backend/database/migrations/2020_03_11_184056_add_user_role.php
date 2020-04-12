<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class AddUserRole extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedSmallInteger('role')->nullable();
        });

        DB::table('users')->update([
            'role' => User::ROLE_USER,
        ]);
    }

    // public function down()
    // {
    //     Schema::table('users', function (Blueprint $table) {
    //         $table->dropColumn('role');
    //     });
    // }
}
