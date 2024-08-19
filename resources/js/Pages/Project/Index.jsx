import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/Constants.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

import {ChevronUpIcon,ChevronDownIcon} from '@heroicons/react/16/solid';
import TableHeading from "@/Components/TableHeading";
export default function Index({ auth, projects, queryParams = null, success }) 
{
  queryParams = queryParams || {};
  
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router .get(route('project.index'),queryParams );
     };


  const onKeyPress = (name, e) => {
    if (e.key !== 'Enter') return;
    searchFieldChanged(name, e.target.value);
  };

  const sortChanged=(name)=>{
    if (name === queryParams.sort_field){
      if(queryParams.sort_direction ==='asc'){
        queryParams.sort_direction="desc";

      }
      else{
        queryParams.sort_direction="asc";
      }
    }else{
      queryParams.sort_field=name;
      queryParams.sort_direction="asc";
    }
    router .get(route('project.index'),queryParams );
  };

const deleteProject=(project)=>{
  if(window.confirm('Are you sure want to delete the Project')){
    return;
  }
  router.delete(route('project.destroy',project.id))
}


  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
     <div className="flex justify-between items-center">
       <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>
    <Link href={route('project.create')}className="text-white bg-blue-500 rounded py-1 px-3 hover:bg-blue-600">
    Add New
    </Link>
     </div>
    }
    >
      <Head title="Projects" />
   
      <div className="py-12">
        
      {success && (
        <div className="bg-blue-500 py-5 px-3 text-white w-60 ml-10  mb-5flex justify-between items-center rounded  ">
      Created Succesfully
      </div>
      )
    }
  
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-black dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
            <div className="overflow-auto">  
              <table className="w-full text-sm text-left rtl:text-right text-white-500 dark:text-gray-400">
                <thead className=" w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr>
                  <TableHeading
                  name="id"
                  sort_field={queryParams.sort_field}
                  sort_direction={queryParams.sort_direction}
                  sortChanged={sortChanged}
                   >
                    ID
                  </TableHeading>
                    <th className="px-3 py-2 ">Image</th>
                    <th 
                    onClick={(e)=>sortChanged('name')}
                    className="px-4 py-2 mb-5  ">
                                    <div className="flex items-center ml-4">
    <span>Name</span>
    <div className="flex items-center mr-2">
      <ChevronUpIcon className="w-4" />
      <ChevronDownIcon className="w-4" />
    </div>
  </div>
                      
                      <TextInput 
                        className="px-4 py-2 w-30 ml-3 mb-5"
                       
                        placeholder="Project Name"
                        onBlur={e => searchFieldChanged('name', e.target.value)}
                        onKeyPress={e => onKeyPress('name', e)}
                      />
                    </th>
                    <th 
                    onClick={(e)=>sortChanged('status')}
                    className="px-3 py-2 ">
                                 <div className="flex items-center ml-4">
    <span>Status</span>
    <div className="flex items-center mr-2">
      <ChevronUpIcon className="w-4" />
      <ChevronDownIcon className="w-4" />
    </div>
  </div>
  <SelectInput 
    className="w-30 ml-2"
    defaultValue={queryParams.status}
    onChange={e => searchFieldChanged('status', e.target.value)}
  >
    <option value="">Select status</option>
    <option value="pending">Pending</option>
    <option value="in_progress">In progress</option>
    <option value="completed">Completed</option>
  </SelectInput> 
                    </th>
                    <th 
                    onClick={(e)=>sortChanged('created_at')}
                    className="px-3 py-2 ">
                      Created Date
                      <div className="flex  ">
                      <ChevronUpIcon className='w-4'/>
                      <ChevronDownIcon className='w-4'/>
                      </div>
                      </th>
                    <th onClick={(e)=>sortChanged('due_date')}
                    className="px-3 py-2 ">
                      Due Date
                      <div className="flex  ">
                      <ChevronUpIcon className='w-4'/>
                      <ChevronDownIcon className='w-4'/>
                      </div>
                    
                      </th>
                    <th 
                    className="px-3 py-2 ">Created By</th>
                    <th className="px-3 py-2 ">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project) => (
                    <tr className="bg-dark border-b dark:bg-gray-800 dark:border-700" key={project.id}>
                      <td className="px-3 py-5">
                        {project.id}
                      </td>
                      <td className="px-3 py-2">
                        <img src={project.image_path} style={{ width: 60 }} />
                      </td>
                      <th className="px-3 py-2 hover:underline text-white text-no-wrap">
                        <Link href={route("project.show",project.id)}>
                      
                        {project.name}
                        </Link>
                      </th>
                      <td className="px-3 py-2">
                        <span className={"px-2 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]}>
                          {PROJECT_STATUS_TEXT_MAP[project.status]}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        {project.create_at}
                      </td>
                      <td className="px-3 py-2">
                        {project.due_date}
                      </td>
                      <td className="px-3 py-2">
                        {project.createdBy.name}
                      </td>
                      <td className="px-3 py-2 text-nowrap">
                        <Link href={route('project.edit', project.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                          Edit
                        </Link>
                        <button 
                        onClick={(e) => deleteProject(project)}
                        href={route('project.destroy', project.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
               </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
