import AdminNav from '@/app/component/admin/AdminNav';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'
import ManagePetClient from './ManagePetClient';
import getPets from '@/action/getPets';

const ManagePetMain = async () => {

    const session = await getServerSession();
    if(!session) {
      redirect("/admin/login");
    }

    const pets = await getPets({category: null});
  return (
    <div>
         <AdminNav/>  

         <div className='pt-3'>
        <ManagePetClient pets={pets}/>
         </div>
    </div>
  )
}

export default ManagePetMain