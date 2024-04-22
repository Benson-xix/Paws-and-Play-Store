import AdminNav from '@/app/component/admin/AdminNav'
import Contain from '@/app/component/Contain'
import React from 'react'
import Summary from './Summary'
import getPets from '@/action/getPets'

const DashBoardMain = async () => {
  const pets = await getPets({ category: null });
  return (
    <div>
        <AdminNav/>
        <div className='lg:pt-8 pt-3'>
        <Contain>
        <Summary pets={pets}/>
        <div>
          
        </div>
        </Contain>
        </div>
    </div>
  )
}

export default DashBoardMain