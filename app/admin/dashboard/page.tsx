import Contain from '@/app/component/Contain'
import Footer from '@/app/component/footer/Footer'
import Header from '@/app/component/Header'
import React from 'react'
import NavBar from './component/NavBar'
import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation"
import DashBoardMain from './component/DashBoardMain'

const Dashboard = async () => {

  const session = await getServerSession();
  if(!session) {
    redirect("/admin/login");
  }
  return (
    <main className="flex min-h-screen flex-col   font-mono  gap-3 bg-teal-200">
    <Header/>

    <div className="flex-grow bg-teal-200 text-teal-200"> 
    <div className="p-2"> 
    <Contain>
    <NavBar/>
    <div>
      <DashBoardMain/>
    </div>
    


  </Contain>
    </div>
    </div>

    <Footer/>
  </main>
  )
}

export default Dashboard