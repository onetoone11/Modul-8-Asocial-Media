<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateLikesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("CREATE TABLE `post_likes` ( 
            user_id bigint(20) UNSIGNED NOT NULL, 
            post_id bigint(20) UNSIGNED NOT NULL, 
            value BIT NOT NULL, 
            CONSTRAINT pk_post_likes PRIMARY KEY NONCLUSTERED (user_id, post_id), 
            CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE, 
            CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE 
        );");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_likes');
    }
}
