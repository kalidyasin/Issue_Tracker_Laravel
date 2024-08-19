<?php

namespace App\Http\Controllers;

use App\Models\Issue;
use App\Models\User;
use App\Models\Project;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\UserResource;
use App\Http\Requests\StoreIssueRequest;
use App\Http\Requests\UpdateIssueRequest;
use App\Http\Resources\IssueResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
class IssueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Issue::query();
        $sortField = request("sort_field" ,'created_at');
        $sortDirection = request("sort_direction","desc");
if(request("name")){
    $query->where("name","like","%".request("name")."%");
}
if (request('status')){
    $query->where("status","like","%".request("status")."%");
}
        $issues = $query->orderBy($sortField,$sortDirection)
        ->paginate(10)
        ->onEachSide(1);
        return inertia('Issue/Index', [
            'issues' => IssueResource::collection($issues),
            'queryParams'=>request()->query()?:null,
            'success' => session('success'),
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $projects= Project::all();
        $users= User::all();
        return inertia("Issue/Create",
    [
        'projects'=> ProjectResource::collection($projects),
        'users'=> UserResource::collection($users),
    ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIssueRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('issue/' . Str::random(), 'public');
        }
        Issue::create($data);

        return to_route('issue.index')
            ->with('success', 'Issue was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Issue $issue)
    {
      
        return inertia('Issue/Show', [
            'issue' => new IssueResource($issue),
           
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Issue $issue)
    {  
        $projects= Project::all();
        $users= User::all();
        return inertia("Issue/Edit",
    [
        'issue' => new IssueResource($issue),
        'projects'=> ProjectResource::collection($projects),
        'users'=> UserResource::collection($users),
    ]);
       
        return inertia('Issue/Edit', [
            
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateIssueRequest $request, Issue $issue)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($issue->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($issue->image_path));
            }
            $data['image_path'] = $image->store('issue/' . Str::random(), 'public');
        }
        $issue->update($data);

        return to_route('issue.index')
            ->with('success', "Issue \"$issue->name\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Issue $issue)
    {
        $name = $issue->name;
        $issue->delete();
        if ($issue->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($issue->image_path));
        }
        return to_route('issue.index')
            ->with('success', "Issue \"$name\" was deleted");
    }
}
