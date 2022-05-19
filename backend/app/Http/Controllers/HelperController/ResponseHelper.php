<?php
namespace App\Http\Controllers\HelperController;
use Illuminate\Http\Response;
trait ResponseHelper {

    /**
     * response created
     *
     * @param array  $data
     * @param string $message
     *
     */
    public static function responseSuccess($data , string $message=""){
        return response()->json([
            "status_code"=>Response::HTTP_OK,
            "data"=>$data,
            "message"=>$message
        ],Response::HTTP_OK);
    }

    /**
     * response created
     *
     * @param array  $data
     * @param string $message
     *
     */
    public static function responseCreated($data, string $message="Created successfully"){
        return response()->json([
            "status_code"=>Response::HTTP_CREATED,
            "data"=>$data,
            "message"=>$message
        ],Response::HTTP_CREATED);
    }

    /**
     * response update
     *
     * @param array  $data
     * @param string $message
     *
     */
    public static function responseUpdated($data, string $message="Updated successfully"){
        return response()->json([
            "status_code"=>Response::HTTP_OK,
            "data"=>$data,
            "message"=>$message
        ],Response::HTTP_OK);
    }

     /**
     * response delete
     *
     * @param array  $data
     * @param string $message
     *
     */
    public static function responseDeleted($data, string $message="Deleted successfully"){
        return response()->json([
            "status_code"=>Response::HTTP_OK,
            "data"=>$data,
            "message"=>$message
        ],Response::HTTP_OK);
    }

    /**
     * response notfound
     *
     * @param array  $data
     * @param string $message
     *
     */
    public static function responseNotfound($data, string $message="Not found !"){
        return response()->json([
            "status_code"=>Response::HTTP_NOT_FOUND,

            "message"=>$message
        ],Response::HTTP_NOT_FOUND);
    }

}
