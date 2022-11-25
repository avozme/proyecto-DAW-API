<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class StoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores')->insert([
            'name' => 'Fruteria de María',
            'address_id' => 'Sierra de Fondón 22',
            'email' => 'frutamaria@msn.com',
            'telephone1' => '950222222',
            'telephone2' => '647895325',
        ]);

        DB::table('stores')->insert([
            'name' => 'Anka la Encarna',
            'address_id' => 'Sierra de Alhamilla 12',
            'email' => 'ankalaencarna@hotmail.com',
            'telephone1' => '950984509',
            'telephone2' => '612654789',
        ]);

        DB::table('stores')->insert([
            'name' => 'El verdulero',
            'address_id' => 'Orión 65',
            'email' => 'juanverdulero@msn.com',
            'telephone1' => '950192837',
            'telephone2' => '647564738',
        ]);

        DB::table('stores')->insert([
            'name' => 'El bazar del alimento',
            'address_id' => 'Afrodita 45',
            'email' => 'bazardelalimento@gmail.com',
            'telephone1' => '950839265',
            'telephone2' => '643091287',
        ]);
    }
}