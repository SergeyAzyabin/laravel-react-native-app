<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Laravel\Passport\Client;
use App\Models\User;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function __invoke(Request $request)


    private $client;
    

    public function __construct()
    {
        $this->client = Client::find(2);
    }


    public function login(Request $request)
    {


        



        $this->validate($request,[
            'email'=>'required',
            'password' => 'required'
        ]);

        $params = [
            
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'username' => request('email'),
            'password' => request('password'),
            'grant_type' => 'password',
            'scope' => ''
        ];


        $request = app('request')->create('/oauth/token', 'POST', $params);
        $response = app('router')->prepareResponse($request, app()->handle($request));
        return $response;


        //
        
        // $credentials = $request->only('email', 'password');

        // if (!Auth::attempt($credentials)) {
        //     return response()->json([
        //         'message' => 'You cannot sign with those credentials',
        //         'errors' => 'Unauthorised'
        //     ], 401);
        // }

        // $token = Auth::user()->createToken(config('app.name'));
        // $token->token->expires_at = $request->remember_me ?
        //     Carbon::now()->addMonth() :
        //     Carbon::now()->addDay();

        // $token->token->save();

        // return response()->json([
        //     'token_type' => 'Bearer',
        //     'token' => $token->accessToken,
        //     'expires_at' => Carbon::parse($token->token->expires_at)->toDateTimeString()
        // ], 200);
    }
}
