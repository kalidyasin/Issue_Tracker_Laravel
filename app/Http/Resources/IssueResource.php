<?php

namespace App\Http\Resources;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IssueResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return 
        [
            'id'=> $this->id,
'name'=>$this->name,
'description'=>$this->description,
'created_at' =>(new Carbon($this->created_at))-> format('Y-m-d'),
('due_date')=>(new Carbon($this->due_date))->format ('Y-m-d'),
'status'=> $this->status,
'priority'=> $this->status,
'severity' => $this->severity,
'image_path' => $this->image_path,
'createdBy' =>new UserResource($this->createdBy),
'assignedUser' => $this->assigneduser ? new UserResource($this->assignedUser) :null,
'project' =>new ProjectResource($this->project),
'project_id' =>$this->project_id,
'updatedBy' =>new UserResource($this->updatedBy),
        ];
    }
}
