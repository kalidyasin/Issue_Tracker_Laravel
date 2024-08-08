import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/Constants.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, projects, queryParams = null }) {
  queryParams = queryParams || {};
  
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    // Handle updating the queryParams in your state or triggering a new request with updated params here
  };

  const onKeyPress = (name, e) => {
    if (e.key !== 'Enter') return;
    searchFieldChanged(name, e.target.value);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>}
    >
      <Head title="Projects" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-black dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left rtl:text-right text-white-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr>
                    <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500">Id</th>
                    <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500">Image</th>
                    <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500">Name
                      <TextInput 
                        className="w-50 ml-5"
                        placeholder="Project Name"
                        onBlur={e => searchFieldChanged('name', e.target.value)}
                        onKeyPress={e => onKeyPress('name', e)}
                      />
                    </th>
                    <th className="px-3 py-2">Status
                      <SelectInput 
                        className="w-50 ml-5"
                        onChange={e => searchFieldChanged('status', e.target.value)}
                      >
                        <option value="">Select status</option>
                        <option value="pending">Pending</option>
                        <option value="in_progress">In progress</option>
                        <option value="completed">Completed</option>
                      </SelectInput> 
                    </th>
                    <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500">Created Date</th>
                    <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500">Due Date</th>
                    <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500">Created By</th>
                    <th className="px-3 py-2 transition-colors duration-300 hover:bg-blue-500">Action</th>
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
                      <td className="px-3 py-2">
                        {project.name}
                      </td>
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
                      <td className="px-3 py-2">
                        <Link href={route('project.edit', project.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                          Edit
                        </Link>
                        <Link href={route('project.destroy', project.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
