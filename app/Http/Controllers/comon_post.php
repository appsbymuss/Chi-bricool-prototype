<?php

namespace App\Http\Controllers;
use App\Models\com_postt;
use Illuminate\Http\Request;

class comon_post extends Controller
{
    public function create_commonet(Request $request){
        $commonet=com_postt::create([
            'nom'=> $request->nom,
            'commontaire'=> $request->commontaire,
            'id_post'=>$request->id_post,
        ]);
        return $commonet;
    }

    public function commonet_post($id){
        return com_postt::where('id_post',$id)->get();
    }
}
