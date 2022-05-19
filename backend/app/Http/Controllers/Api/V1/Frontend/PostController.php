<?php

namespace App\Http\Controllers\Api\V1\Frontend;

use App\Http\Controllers\HelperController\Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Frontend\PostRequest;
use App\Http\Resources\Post\PostCollection;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Helper::responseSuccess(new PostCollection((Post::all())));
    }


    /**
     * Create a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(PostRequest $request)
    {






        $image=Helper::uploadSingleFile('posts',$request->file('image'));

        $post = Post::create([
            "title"=>$request->title,
            "description"=>$request->description,
            "image"=>$image
        ]);
        return Helper::responseCreated(new PostResource($post));

    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::find($id);
        if(!$post){
            return Helper::responseNotfound([]);
        }
        return Helper::responseSuccess(new PostResource($post));
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, $id)
    {

        $post = Post::find($id);
        if(!$post){
            return Helper::responseNotfound([]);
        }
        $image = $post->image;

        if(!empty($request->file('image'))){
            Helper::deleteFile("posts",$image);
            $image= Helper::uploadSingleFile("posts",$request->file('image'));
        }
        $post->update([
            "title"=>$request->title,
            "description"=>$request->description,
            "image"=>$image
        ]);

        return Helper::responseUpdated(new PostResource($post));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $post = Post::find($id);
        if(!$post){
            return Helper::responseNotfound([]);
        }
        Helper::deleteFile("posts",$post->image);
        $post->delete();
        return Helper::responseDeleted([]);

    }
}
