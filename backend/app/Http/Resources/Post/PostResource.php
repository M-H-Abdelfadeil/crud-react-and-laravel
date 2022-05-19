<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            "id"=>$this->id,
            "title"=>$this->title,
            "description"=>$this->description,
            "image"=> config('app.url')."/storage/public/posts/".$this->image,
        ];
    }
}