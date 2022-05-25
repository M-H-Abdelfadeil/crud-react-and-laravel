<?php

namespace App\Http\Requests\Api\Frontend;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;



class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules=[
            "title"=>"required|string|max:255|unique:posts,title",
            "description"=>"required|string|max:2000",
            "image"=>"required|mimes:png,jpg,jpeg|max:5000"
        ];

        if(in_array($this->method(),['PUT','PATCH'])){
            $post=$this->route()->parameter('id');

            $rules["title"]=["required","string","max:255",Rule::unique('posts','title')->ignore($post,'id')];
            $rules["image"]="nullable|mimes:png,jpg,jpeg|max:5000";
        }

        return $rules;

    }








}
