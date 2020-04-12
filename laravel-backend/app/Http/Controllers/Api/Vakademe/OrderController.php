<?php

namespace App\Http\Controllers\Api\Vakademe;

use App\Http\Controllers\Controller;
use App\Models\Vakademe\Order;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Vakademe\Status;
use App\Models\Vakademe\Work;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ORderController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */



    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function index()
    {
        //
        $items = Auth::user()->orders()->get();
        return $items;

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        
        $statusName = (Status::where('id',1)->select('name')->first()->toArray())['name'];
        $workName = (Work::where('id',$request->input('work_id'))->select('name')->first()->toArray())['name'];
        
        $order = Order::create([
            'comment' => $request->input('comment'),
            'user_id' => Auth::id(),
            
            'status_name' => $statusName,
            'work_name' => $workName,
        ]);
        // return response()->json([
            
        //     'message' => 'Success'
        //   ], 200);
        return $order;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return $order = Order::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $task = Order::findOrFail($id);
        if($task->delete()) return response(null, 204);
    }
}
