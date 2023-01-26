<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Schedules_storesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('schedule_store')->insert([
            'schedule_id' => 1,
            'store_id' => 3,
        ]); 

        DB::table('schedule_store')->insert([
            'schedule_id' => 3,
            'store_id' => 3,
        ]); 

        DB::table('schedule_store')->insert([
            'schedule_id' => 6,
            'store_id' => 3,
        ]); 
    }
}
