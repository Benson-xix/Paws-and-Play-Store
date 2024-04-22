import React from 'react'
import Pet from './Pet';
import Header from '@/app/component/Header';
import Footer from '@/app/component/footer/Footer';
import Contain from '@/app/component/Contain';
import getPetById from '@/action/getPetById';
import NullData from '@/app/component/NullData';

interface IParams {
 petId: string;
}


const page = async ({ params }: { params: IParams }) => {

  const pet = await getPetById(params);

  

  if(!pet) return <NullData title="Oops pet with this assigned Id doesnot exist"/>
  

  return (
    <main className="flex min-h-screen flex-col   font-mono  gap-3 bg-teal-200">
    <Header/>
      
      <div className="flex-grow bg-teal-200 text-teal-200">
    <div className="p-8">
      <Contain>
      <Pet pet={pet}/>
      </Contain>
    </div>
      </div>

      <Footer/>
    </main>
  )
}

export default page