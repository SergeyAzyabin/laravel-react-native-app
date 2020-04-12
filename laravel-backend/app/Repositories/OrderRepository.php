<?php



namespace App\Repositories;

use App\Models\Vakademe\Order as Model;



class OrderRepository extends CoreRepository
{

    protected function getModelClass()
    {
        return Model::class;

    }
}











?>