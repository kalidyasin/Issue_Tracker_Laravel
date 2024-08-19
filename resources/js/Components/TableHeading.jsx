
import {ChevronUpIcon,ChevronDownIcon} from '@heroicons/react/16/solid';
export default function TableHeading ({ name,
    sort_field=null, 
    sortable=true,
    sort_direction=null ,
    sortChanged=()=>{},
    children,

}){
    return (
        <th  
        onClick={(e)=>sortChanged(name)}
        >
<div className="flex items-center ml-4">


{children}
{sortable && (
    <div className="flex items-center mr-2">
    <ChevronUpIcon className={"w-4" + (sort_field ==="id" &&
    sort_direction ==='asc' )}
    />
    <ChevronDownIcon  className={"w-4" + (sort_field ==="id" &&
        sort_direction ==='asc' )} />
    </div>
)}
</div>
        </th>
    )
 }