<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use DB;

class CreateLikesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('likes', function (Blueprint $table) {
        //     $table->id();
        //     $table->timestamps();
        //     $table->int('user_id');
        //     $table->string('image');
        //     $table->string('title');
        //     $table->string('text');
        //     $table->string('likes');
        //     $table->string('dislikes');
        // });
        DB::statement("CREATE TABLE `likes`");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
