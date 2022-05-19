<?php
namespace App\Http\Controllers\HelperController;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;

trait FileHelper {
    /**
     * upload single file
     *
     * @param string  $dir
     * @param  $file
     *
     * @return string
     */
    public static function uploadSingleFile(string $dir, $file){
        if(!Storage::disk('public')->exists($dir)){
            Storage::disk('public')->makeDirectory($dir);
        }
        $img = Image::make($file)->stream();
        $extention=$file->getClientOriginalExtension();
        $imageName= self::randomNameFile() .".". $extention;
        Storage::disk('public')->put($dir."/".$imageName , $img);
        return $imageName;

    }

    public static function deleteFile(string $dir , string $fileName){
        if(Storage::disk('public')->exists($dir."/".$fileName)){
            Storage::disk('public')->delete($dir."/".$fileName);
            return true;
        }
        return false;
    }
    private static function randomNameFile(){
        return Str::random(20).time();
    }

}
