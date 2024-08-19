import { ISSUE_STATUS_CLASS_MAP,ISSUE_STATUS_TEXT_MAP } from "@/Constants";
import { ISSUE_SEVERITY_CLASS_MAP,ISSUE_SEVERITY_TEXT_MAP } from "@/Constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import IssueTable from "../Issue/IssueTable";

export default function Shoe({auth,issue}){

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {'Issue "${issue.name}"'}

        </h2>}
      
        >
<Head title={'Issue ${issue.name}"'}/>



                <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> 
            
          <div className="bg-black dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"> 
            <div className="p-6 text-gray-900 dark:text-gray-100">

                <div>
                    <img 
                    src={issue.image_path}
                   alt=""
                   className="w-full h-64 object-cover"

                    />
                </div>
                <div className="grid gap-1 grid-cols  mt-2">
                    
                 <div>
                   <div>
                    <label className="font-bold text-lg">Issue Id</label>
                    <p className="mt-1">{issue.id}</p>
                   </div>
                   <div className="mt-4">
                    <label className="font-bold text-lg">Issue Name</label>
                    <p className="mt-1">{issue.name}</p>
                   </div>
                   <div className="mt-4">
                    <label className="font-bold text-lg">Project Name</label>
                    <p className="mt-1">
                      <Link href={route('project.show',issue.project.id)}>
                      {issue.project.name}
                      </Link>
                    </p>
                   </div>
                   <div className="mt-4">
                    <label className="font-bold text-lg">Issue Status</label>
                    <p className="mt-1">{issue.status}
                    <span className={"px-2 py-1 rounded text-white"+
                      ISSUE_STATUS_CLASS_MAP[issue.status]
                    }
                      >
                        
                        {ISSUE_STATUS_TEXT_MAP[issue.status]}
                        </span>
                        </p>
                        </div>
                        <div className="mt-4">
                    <label className="font-bold text-lg">Issue Severity</label>
                    <p className="mt-1">{issue.severity}
                    <span className={"px-2 py-1 rounded text-white"+
                      ISSUE_SEVERITY_CLASS_MAP[issue.severity]
                    }
                      >
                        
                        {ISSUE_SEVERITY_TEXT_MAP[issue.severity]}
                        </span>
                        </p>
                        </div>

                       <div className="mt-4">
                    <label className="font-bold text-lg">Created by</label>
                    <p className="mt-1">{issue.createdBy.name}</p>
                   </div>
                   <div className="mr-10">
                   <div className="mt-4">
                    <label className="font-bold text-lg">Created Date</label>
                    <p className="mt-1">{issue.due_date}</p>
                   </div>
                
                   <div className="mt-4">
                    <label className="font-bold text-lg">Assigned User</label>
                    <p className="mt-1">{issue.assignedUser.name}</p>
                   </div>
                   </div>
                   <div className="mt-4">
                   <label className="font-bold text-lg">Issue</label>
                   <p className="mt-1">{issue.description}</p>

                   </div>
                 
                  
                      
                   

                    
                   </div>

                 </div> 
                 
                 <div>

                 </div> 
                 
                </div>
                <div className="mt-4">
                        
                    </div>
            
                
                </div>

              
                </div>
                
                </div>
                
              
               
        </AuthenticatedLayout>
    )
}