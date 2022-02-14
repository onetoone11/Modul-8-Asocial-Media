<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateCommentLikesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("CREATE TABLE `comment_likes` ( 
            user_id bigint(20) UNSIGNED NOT NULL, 
            comment_id bigint(20) UNSIGNED NOT NULL,
            CONSTRAINT pk_comment_likes PRIMARY KEY NONCLUSTERED (user_id, comment_id), 
            CONSTRAINT fk_comment_user_id FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE, 
            CONSTRAINT fk_comment_comment_id FOREIGN KEY (comment_id) REFERENCES comments (id) ON DELETE CASCADE 
        );");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comment_likes');
    }
}
