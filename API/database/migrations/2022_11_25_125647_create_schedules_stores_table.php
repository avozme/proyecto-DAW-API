<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules_stores', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            //$table->integer('schedules_id');
            //$table->integer('stores_id');

            //restricciones de claves foráneas (para que coja ids que existan y para que borre la relación si se borran los ids a los que se referencia). En lugar de lo anterior, se pone esto: 
            $table->foreignId('schedules_id')->constrained()->onDelete('cascade');
            $table->foreignId('stores_id')->constrained()->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules_stores');
    }
};
