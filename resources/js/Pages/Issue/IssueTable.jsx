import TableHeading from "@/Components/TableHeading";
import {  Link, router } from "@inertiajs/react";
import { ISSUE_STATUS_CLASS_MAP, ISSUE_STATUS_TEXT_MAP } from "@/Constants.jsx";
import { ISSUE_SEVERITY_CLASS_MAP, ISSUE_SEVERITY_TEXT_MAP } from "@/Constants.jsx";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
export default function IssueTable({issues,
   queryParams=null,
   success,
   hideProjectColumn=false,
  }){
  queryParams =queryParams||{};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router .get(route('issue.index'),queryParams );
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
    router .get(route('issue.index'),queryParams );
  };
  const deleteIssue=(issue)=>{
    if(window.confirm('Are you sure want to delete the Issue')){
      return;
    }
    router.delete(route('issue.destroy',issue.id))
  }

    return(
        <>
         {success && (
        <div className="bg-blue-500 py-5 px-3 text-white w-60 ml-10  mb-5flex justify-between items-center rounded  ">
      Created Succesfully
      </div>
      )
    }
        <div className="overflow-auto">  
              <table className="w-full text-sm text-left rtl:text-right text-white-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr>
                  <TableHeading
                  name="id"
                  sort_field={queryParams.sort_field}
                  sort_direction={queryParams.sort_direction}
                  sortChanged={sortChanged}
                   >
                    ID
                  </TableHeading> 

                  <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500 cursor-pointer">Image</th>
                  <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500 cursor-pointer">Project Name</th>
                  
                    <th onClick={(e)=>sortChanged('name')}
                    className="px-3 py-2 cursor-pointer">
                      Name
                      <TextInput 
                        className="w-50 ml-5"
                       
                        placeholder="Issue Name"
                        onBlur={e => searchFieldChanged('name', e.target.value)}
                        onKeyPress={e => onKeyPress('name', e)}
                      />
                    </th>
                    <th onClick={(e)=>sortChanged('status')}
                    className="px-3 py-2 cursor-pointer">Status
                      <SelectInput
                        className="w-50 ml-5"
                        defaultValue={queryParams.status}
                        onChange={e => searchFieldChanged('status', e.target.value)}
                      >
                          <option value="">Select Status</option>
                  <option value="open">open</option>
                  
                  <option value="Resolved">Resolved</option>
                  <option value="closed">closed</option>
                  <option value="in_progress">In Progress</option>
                  
                      </SelectInput> 
                    </th>
                    <th onClick={(e)=>sortChanged('created_at')}
                    className="px-3 py-2  cursor-pointer">Severity
                     <SelectInput
                        className="w-50 ml-5"
                        defaultValue={queryParams.severity}
                        onChange={e => searchFieldChanged('severity', e.target.value)}
                      >
                        <option value="">Select Severity</option>
                        <option value="pending">Trivial</option>
                        <option value="pending">Critical</option>
                        <option value="in_progress">Minor</option>
                        <option value="completed">Major</option>
                      </SelectInput></th>
                    <th onClick={(e)=>sortChanged('due_date')}
                    className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500 cursor-pointer">Created Date</th>
                     
                   
                    <th 
                    className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500 cursor-pointer">Created By</th>
                    <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500 cursor-pointer">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {issues.data.map((issue) => (
                    <tr className="bg-dark border-b dark:bg-gray-800 dark:border-700" key={issue.id}>
                      <td className="px-3 py-5">
                        {issue.id}
                      </td>
                      <td className="px-3 py-2">
                        <img src={issue.image_path} style={{ width: 60 }} />
                      </td>
                         <td className="px-3 py-5">
                        {issue.project.name}
                      </td>
                      <th className="px-3 py-2 hover:underline text-white text-no-wrap">
                        <Link href={route("issue.show",issue.id)}>
                      
                        {issue.name}
                        </Link>
                      </th>
                      <td className="px-3 py-2">
                        <span className={"px-2 py-1 rounded text-white " + ISSUE_STATUS_CLASS_MAP[issue.status]}>
                          {ISSUE_STATUS_TEXT_MAP[issue.status]}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                      <span className={"px-2 py-1 rounded text-white " + ISSUE_SEVERITY_CLASS_MAP[issue.severity]}>
                          {ISSUE_SEVERITY_TEXT_MAP[issue.severity]}
                        </span>
                        </td>
                        
                      <td className="px-3 py-2">
                        {issue.due_date}
                      </td>
                      
                      <td className="px-3 py-2">
                        {issue.createdBy.name}
                      </td>
                      <td className="px-3 py-2 text-nowrap">
                        <Link href={route('issue.edit', issue.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                          Edit
                        </Link>
                        <button 
                         onClick={(e) => deleteIssue(issue)}
                        href={route('issue.destroy', issue.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1 ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
               </div>
        </>
    )
}