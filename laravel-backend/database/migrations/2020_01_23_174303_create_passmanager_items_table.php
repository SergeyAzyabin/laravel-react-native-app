<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePassmanagerItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passmanager_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('user_id');

            $table->string('slug')->unique()->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            $table->text('excerpt')->nullable();
            $table->string('login');
            $table->string('password');
            $table->string('email')->nullable();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('category_id')->references('id')->on('passmanager_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('passmanager_items');
    }
}
