<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Http\Requests\Api\Auth\RegisterFormRequest;
use App\Models\User;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Route;

class RegisterController extends Controller
{

    private $client;
    

    public function __construct()
    {
        $this->client = Client::find(2);
    }
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function __invoke(RegisterFormRequest $request)
    public function register(RegisterFormRequest $request)
    {
        //
        $user = User::create(array_merge(
            $request->only('name', 'email'),
            ['password' => bcrypt($request->password)]
        ));
        $params = [
            
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'username' => request('email'),
            'password' => request('password'),
            'grant_type' => 'password',
            'scope' => ''
        ];

        // $request->request->add($params);

        // $proxy = $request->create('oauth/token', 'POST');
        // $proxy->request->add($params);
        // return Route::dispatch($proxy);


        $request = app('request')->create('/oauth/token', 'POST', $params);
        $response = app('router')->prepareResponse($request, app()->handle($request));
        return $response;
        // return Route::dispatch($proxy);
        // dd($params);

        // return response()->json([
        //     'message' => 'You were successfully registered. Use your email and password to sign in.'
        // ], 200);
    }
    // public function register(Request $request) {
    //     dd($request->all());
    // }
}
