"use client";

import { usePathname } from "next/navigation";
import Contain from "../Contain";
import Link from "next/link";
import AdminNavComp from "./AdminNavComp";
import { MdDashboard, MdDns, MdLibraryAdd } from "react-icons/md";

const AdminNav = () => {
    const pathname = usePathname();


  return (
    <div className='w-full shadow-sm top-20 border-b-[1px] bg-teal-200 border border-orange-300  lg:pt-4 pt-1' >
        <Contain>
            <div className='flex  flex-row items-center justify-between md:justify-center gap-3 md:gap-12 overflow-x-auto flex-nowrap'>
            <Link href="/admin/dashboard">
            <AdminNavComp
             label='Dashboard'
             icon={MdDashboard}
             selected={pathname === "/admin/dashboard"}
            />
            </Link>

            <Link href="/admin/dashboard/addpet">
            <AdminNavComp
             label='Add New Pet'
             icon={MdLibraryAdd}
             selected={pathname === "/admin/dashboard/addpet"}
            />
            </Link>

            <Link href="/admin/dashboard/managepet">
            <AdminNavComp
             label='Manage Pet'
             icon={MdDns}
             selected={pathname === "/admin/dashboard/managepet"}
            />
            </Link>


            </div>
        </Contain>
    </div>
  )
}

export default AdminNav