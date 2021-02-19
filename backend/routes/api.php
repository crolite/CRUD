<?php

use App\Models\Projects;
use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/projects', function(){
    return  Projects:: all(); 
});

Route::get('/students', function(){
    return  Students:: all(); 
});

Route::post('/projects', function(){
    return Projects:: create([      
        'name' =>request('name'),
        'groups'=>request('groups'),
        'student_group'=>request('student_group'),
    ]);
});     


Route::post('/students', function(){
    return Students:: create([      
        'projectID' =>request('projectID'),
        'fullname'=>request('fullname'),
        
    ]);
});  


Route::put('/projects/{project}', function(Projects $project){
    $project -> update([
        'name' =>request('name'),
        'groups'=>request('groups'),
        'student_group'=>request('student_group'), 
    ]);

});

Route::put('/students/{student}', function(Students $student){
    $student -> update([
        'group_number'=>request('group_number'),
    ]);

});



Route::delete('/students/{student}', function(Students $student){
    $student -> delete();
} );


Route::delete('/projects/{project}', function(Projects $project){
    $project -> delete();
} );