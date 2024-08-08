<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'due_date',
        'status',
        'priority',
        'severity',
        'image_path',
        'assigned_user_id',
        'created_by',
        'updated_by',
        'project_id'
    ];
}
