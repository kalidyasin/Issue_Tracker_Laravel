import { PROJECT_STATUS_CLASS_MAP,PROJECT_STATUS_TEXT_MAP } from "@/Constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import IssueTable from "../Issue/IssueTable";
export default function Shoe({auth,project,issues,success,queryParams}){

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {'Project "${project.name}"'}

        </h2>}
      
        >
<Head title={'Project ${project.name}"'}/>
<pre>{JSON.stringify(project)}</pre>


                <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> 
            
          <div className="bg-black dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"> 
            <div className="p-6 text-gray-900 dark:text-gray-100">

                <div>
                    <img 
                    src={project.image_path}
                   alt=""
                   className="w-full h-64 object-cover"

                    />
                </div>
                <div className="grid gap-1 grid-cols  mt-2">
                    
                 <div>
                   <div>
                    <label className="font-bold text-lg">Project Id</label>
                    <p className="mt-1">{project.id}</p>
                   </div>
                   <div className="mt-4">
                    <label className="font-bold text-lg">Project Name</label>
                    <p className="mt-1">{project.name}</p>
                   </div>
                   <div className="mt-4">
                    <label className="font-bold text-lg">Project Status</label>
                    <p className="mt-1">{project.status}
                    <span className={"px-2 py-1 rounded text-white"+
                      PROJECT_STATUS_CLASS_MAP[project.status]}
                      >
                       
                       <div className="mt-4">
                    <label className="font-bold text-lg">Created by</label>
                    <p className="mt-1">{project.createdBy.name}</p>
                   </div>
                   <div className="mr-10">
                   <div className="mt-4">
                    <label className="font-bold text-lg">Due Date</label>
                    <p className="mt-1">{project.due_date}</p>
                   </div>
                   <div className="mt-4">
                    <label className="font-bold text-lg">Created Date</label>
                    <p className="mt-1">{project.created_at.name}</p>
                   </div>
                   <div className="mt-4">
                    <label className="font-bold text-lg">Updated By</label>
                    <p className="mt-1">{project.updatedBy.name}</p>
                   </div>
                   </div>
                   <div className="mt-4">
                   <label className="font-bold text-lg">Project</label>
                   <p className="mt-1">{project.description}</p>

                   </div>
                 
                  
                      
                   

                    </span>
                    </p>
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
                
                </div>
                <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> 
            
          <div className="bg-black dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"> 
            <div className="p-6 text-gray-900 dark:text-gray-100">

              <IssueTable issues={issues} queryParams={queryParams} success={success}/>
            
                
                </div>

              
                </div>
                
                </div>
                
                </div>
        </AuthenticatedLayout>
    )
}