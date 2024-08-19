<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $user =auth()->user();
        
        $totalInprogressIssues =Issues::query()
        ->where('status','inprogress')
        ->count();
        $myPendingIssues =Issues::query()
        ->where('status','inprogress')
        ->where('assigned_user_id',$user->id)
        ->count();
        return Inertia::render('Dashboard',compact('totalInprogressIssues','myInprogressIssues'
            
        ));
    }
}
