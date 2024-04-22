import React from 'react'
import { IconType } from 'react-icons';

interface AdminNavCompProps {
    selected? : boolean;
    icon: IconType;
    label: string
}

const AdminNavComp : React.FC<AdminNavCompProps>  = ({
    selected,
    icon: Icon,
    label
}) => {
  return (
    <div className={`flex md:flex-row flex-col items-center  justify-center text-center gap-1 p-2 border-b-2 hover:text-gray-900 transition cursor-pointer ${selected ? 'border-b-orange-300  text-gray-900' : 'border-transparent text-orange-300'}`}>
        <Icon size={20} />
        <div className="font-medium md:text-sm text-xs text-center break-normal">{label}</div>
    </div>
  )
}

export default AdminNavComp