<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class imagesApiController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    private $imagesByCategories = array(
        'homepage' => array(
            array('id'=>1,'title'=>'le bo titre','src'=>'truc/machin'),
            array('id'=>2,'title'=>'le bo titre 2','src'=>'/machin/truc')
        )
    );

    public function __construct()
    {
        //
    }

    private function buildImagesByCategories(){
        $imageFolderUrl = url('img/data');
        $files = Storage::allFiles($imageFolderUrl);
        var_dump($imageFolderUrl);
        var_dump($files);
        foreach ($files as $file) {
            var_dump($file);
        }
    }

    public function renderCategoryList(){

    }

    public function renderJson($category){
        $this->buildImagesByCategories();
        return response()->json($this->imagesByCategories);
    }
}
