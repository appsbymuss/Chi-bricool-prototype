<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users|max:255',
            'address' => 'required|string',
            'city' => 'required|string',
            'CIN' => 'required|string',
            'role' => 'required|string',
            'metier' => 'nullable|string', 
            'password' => 'required|string',
        ]);

        if(User::where('email', $request->email)->first()){
            return response([
                'message' => 'Email already exists',
                'status'=>'failed'
            ], 200);
        }

        $user =User::create([
            'firstName'=> $request->firstName,
            'lastName'=>$request->lastName,
            'email'=>$request->email,
            'address'=>$request->address,
            'city'=>$request->city,
            'CIN'=>$request->CIN,
            'role'=>$request->role,
            'metier'=>$request->metier,
            'password'=>Hash::make($request->password),
            
            
        ]);
        $token = $user->createToken($request->email)->plainTextToken;
        return response([
            'token'=>$token,
            'message' => 'Registration Success',
            'status'=>'success'
        ], 201);
}


public function login(Request $request){
    $request->validate([
        'email'=>'required|email',
        'password'=>'required',
    ]);

    $user = User::where('email', $request->email)->first();
    if($user && Hash::check($request->password, $user->password)){
        $token = $user->createToken($request->email)->plainTextToken;
        return response([
            'token'=>$token,
            'message' => 'Login Success',
            'status'=>'success'
        ], 200);
    }

    return response([
        'message' => 'The Provided Credentials are incorrect',
        'status'=>'failed'
    ], 401);
}
    public function logout(){
    auth()->user()->tokens()->delete();
    return response([
        'message' => 'Logout Success',
        'status'=>'success'
    ], 200);
} 

public function logged_user(){
    $loggeduser = auth()->user();
    return response([
        'user'=>$loggeduser,
        'message' => 'Logged User Data',
        'status'=>'success'
    ], 200);
}

public function change_password(Request $request){
    $request->validate([
        'password' => 'required|confirmed',
    ]);
    $loggeduser = auth()->user();
    $loggeduser->password = Hash::make($request->password);
    $loggeduser->save();
    return response([
        'message' => 'Password Changed Successfully',
        'status'=>'success'
    ], 200);
}

public function destroy(string $id)
{
    $user = User::whereId($id)->first();
    $user->posts()->delete();
    $user->delete();
    return response()->json([
        'status'=>200,
        'message'=>'delete user'
    ]);
}

public function index()
{
    return User::all();
}



public function search( $search)
{
    return User::where('firstName','Like',"%$search%")
                    ->orWhere('lastname','Like',"%$search%")
                    ->orWhere('email','Like',"%$search%")
                    ->orWhere('id','Like',"%$search%")
                    ->orWhere('address','Like',"%$search%")
                    ->get();
}

public function searchh( $search)
{
    return User::where('firstName','Like',"%$search%")
                    ->orWhere('lastname','Like',"%$search%")
                    ->orWhere('email','Like',"%$search%")
                    ->orWhere('id','Like',"%$search%")
                    ->orWhere('address','Like',"%$search%")
                    ->orWhere('metier','Like',"%$search%")->get();
}

public function searchhh( $search)
{
    return User::where('metier','Like',"%$search%")->get();
}

public function search_cli( $search)
{
    return User::where('firstName','Like',"%$search%")
                    ->orWhere('lastname','Like',"%$search%")
                    ->orWhere('email','Like',"%$search%")
                    ->orWhere('id','Like',"%$search%")
                    ->orWhere('address','Like',"%$search%")->get();
}

public function Detai_post(string $id_client){
    return User::where('id',$id_client)->get();
}
};