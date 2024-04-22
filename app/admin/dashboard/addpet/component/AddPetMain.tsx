import AdminNav from '@/app/component/admin/AdminNav';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'
import AddPetForm from './AddPetForm';

const AddPetMain = async () => {

    const session = await getServerSession();
    if(!session) {
      redirect("/admin/login");
    }
  return (
    <div>
         <AdminNav/>  

         <div className='pt-3'>
            <AddPetForm/>
         </div>
      
    </div>
  )
}

export default AddPetMain
