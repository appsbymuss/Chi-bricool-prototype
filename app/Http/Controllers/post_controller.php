<?php

namespace App\Http\Controllers;

use App\Http\Requests\createPostClientRequest;
use Illuminate\Http\Request;
use App\Models\post;

class post_controller extends Controller
{
    public function index()
    {
        return post::all();
    }

    public function indexx(string $id_client){
        return post::where('user_id',$id_client)->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $post=post::create([
            'title'=> $request->title,
            'description'=>$request->description,
            'metier'=>$request->metier,
            'date'=>$request->date,
            'user_id'=>$request->user_id,
        ]);
        return $post;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return post::find($id);
    }

    public function find_metier(string $metier)
    {
        return post::where('metier',$metier)->get();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, $id)
    {
        $post = post::find($id);
        $post->title=$request->title;
        $post->description=$request->description;
        $post->metier=$request->metier;
        $post->date=$request->date;
        $post->update();

        return response()->json([
            'status'=>200
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = post::whereId($id)->first();
        $post->delete();
        return response()->json([
            'status'=>200,
            'message'=>'delete post client'
        ]);

        redirect('/view_up_del_post_client');
    }

    public function find_post(string $id){
        return post::where('id',$id)->get();
    }
}
