import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, issue,projects,users }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: issue.name || "",
    severity: issue.severity || "",
    assigned_user_id: issue.assigned_user_id || "",
    status: issue.status || "",
    description: issue.description || "",
    created_date: issue.created_date || "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("issue.update", issue.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Edit issue "{issue.name}"
          </h2>
        </div>
      }
    >
      <Head title="Issues" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              {issue.image_path && (
                <div className="mb-4">
                  <img src={issue.image_path} className="w-64" />
                </div>
              )}
        <div>
                <InputLabel
                  htmlFor="issue_image_path"
                  value="Issue Image"
                />
                <TextInput
                  id="issue_image_path"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="issue_name" value="Issue Name" />

                <TextInput
                  id="issue_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="issue_description"
                  value="Issue Description"
                />

                <TextAreaInput
                  id="issue_description"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("description", e.target.value)}
                />

                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="issue_created_date"
                  value="Issue Created Date"
                />

                <TextInput
                  id="issue_created_datee"
                  type="date"
                  name="created_date"
                  value={data.created_date}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("created_date", e.target.value)}
                />

                <InputError message={errors.created_date} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="issue_status" value="Issue Status" />

                <SelectInput
                  name="status"
                  id="issue_status"
                  value={data.status}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("status", e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="open">open</option>
                  <option value="Resolved">Resolved</option>
                  <option value="closed">closed</option>
                  <option value="in_progress">In Progress</option>
                 
                </SelectInput>

                <InputError message={errors.issue_status} className="mt-2" />

                
              </div>
              <div className="mt-4">
                
              <InputLabel
                  htmlFor="issue_assigned_user"
                  value="Assigned User"
                />

               <SelectInput
                 
                 name="assigned_user_id"
                 value={data.assigned_user}
                 id="assigned_user"
                 className="mt- block w-full"
                 onChange={(e) => setData("assigned_user", e.target.value)}
               >
                        <option value="">Select User</option>
                       <option value="">Devlopers</option>
                       <option value="">Issue Manager</option>
                       <option value="">QA Egineer</option>
                       {users.data.map((user) => (
                    <option value={user.id} key={user.id}>
                      {user.name}
                    </option>
                  ))}
                       
                       <InputError message={errors.assigned_user} className="mt-2" />
               </SelectInput>
              </div>
              <div className="mt-4">
                
              <InputLabel
                  htmlFor="project_id"
                  value="Project "
                />

               <SelectInput
                 
                 name="project_id"
                 value={data.project_id}
                 id="issue_project_id"
                 className="mt- block w-full"
                 onChange={(e) => setData("project_id", e.target.value)}
               >
            


<option value="">Select Project</option>
                  {projects.data.map((project) => (
                    <option value={project.id} key={project.id}>
                      {project.name}
                    </option>
                  ))}
                       
                       
                       <InputError message={errors.project_id} className="mt-2" />
               </SelectInput>
              </div>
              <div className="mt-4" >
              <InputLabel
                  htmlFor="issue_created_date"
                  value="Issue Severity"
                />
              <SelectInput
                 
                 name="severity"
                 id="issue_severity"
                 value={data.severity}
                 className="mt- block w-full"
                 onChange={(e) => setData("severity", e.target.value)}
               >
            <option value="">Select Severity</option>
                       <option value="pending">Trivial</option>
                       <option value="pending">Critical</option>
                       <option value="in_progress">Minor</option>
                       <option value="completed">Major</option>
                       <InputError message={errors.issue_severity} className="mt-2" />
               </SelectInput>
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("issue.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancel
                </Link>
                <button className="bg-blue-500 py-1 px-3 text-white rounded shadow ">
                  Submit
                </button>
              </div>
            </form>
            </div>

</div>
</div>
</AuthenticatedLayout>
);
}