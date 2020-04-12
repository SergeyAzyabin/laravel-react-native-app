<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class WorksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $works = [
            [
                'name' => 'Дистанционные тесты и экзамены',
                'slug' => Str::slug('Дистанционные тесты и экзамены')

            ],
            [
                'name' => 'Сессия под ключ',
                'slug' => Str::slug('Сессия под ключ')

            ],
            [
                'name' => 'Дипломная работа',
                'slug' => Str::slug('Дипломная работа')

            ],
            [
                'name' => 'Презентация к диплому',
                'slug' => Str::slug('Презентация к диплому')

            ],
            [
                'name' => 'Защитная речь',
                'slug' => Str::slug('Защитная речь')

            ],
            [
                'name' => 'Курсовая работа',
                'slug' => Str::slug('Курсовая работа')

            ],
            [
                'name' => 'Контрольная работа',
                'slug' => Str::slug('Контрольная работа')

            ]
        ];

        DB::table('works')->insert($works);
    }
}
