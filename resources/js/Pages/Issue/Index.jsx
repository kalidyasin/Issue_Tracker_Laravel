
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import IssueTable from "./IssueTable";
import { Head, Link} from "@inertiajs/react";

export default function Index({ auth, issues,success, queryParams = null }) {
  queryParams = queryParams || {};
  
 
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
     <div className="flex items-center justify-between">
       <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Issues</h2>
        <Link href={route('issue.create')}className="text-white bg-blue-500 rounded py-1 px-3 hover:bg-blue-600">
        Add New ➕
        </Link>
     </div>
      }

    >
      <Head title="Issues" />
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
  );
}
