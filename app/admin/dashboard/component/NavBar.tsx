"use client"

import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Button from '@/app/component/Button';

const NavBar = () => {
    const {data:session}: any = useSession();

  return (
    <div className='w-full flex lg:flex-row flex-col  justify-between lg:h-[50px] h-[200px] p-3 text-orange-300 bg-gray-900 '>
        <Link href="/admin/dashboard">Dashboard</Link>
    {!session ? (
        <>
         <Link href="/admin/login">Login</Link>
         <Link href="/admin/register">Register</Link>
        </>
    ): (
        <>
        {session.user?.email}
        <>
           <button onClick={() => {signOut()}} className='p-2 px-5 -mt-1 bg-orange-300 w-full xl:w-1/5 flex items-center justify-center md:w-1/2 rounded-full  text-teal-200'>LogOut</button>
        </>
        </>
    )}
   
    </div>
  )
}

export default NavBar