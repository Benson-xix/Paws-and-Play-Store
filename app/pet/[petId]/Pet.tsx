"use client";

import PetImages from "@/app/component/pets/PetImages";

import React, { useEffect, useState } from "react";

interface PetProps {
  pet: any;
}

const Pet : React.FC<PetProps> = ({pet}) => {


  const [showText, setShowText] = useState(false);

  const data = JSON.parse(JSON.stringify(pet));


  const Horizontal = () => {
    return <hr className='w-[30% my-2] ' />;
  };

  const handleAcquireClick = () => {
    setShowText(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <PetImages petImages={data.petImages} />

      <div className="flex flex-col gap-1 text-gray-900 text-sm ">
        <h2 className='text-3xl font-medium text-orange-300'>{data.petName}</h2>
        <Horizontal />
        <div className='text-justify'>{data.petDescription}</div>
        <Horizontal />
        <div>
          <span className='font-semibold'>CATEGORY:</span>
          {data.petCategory}
        </div>

        <div>
          <span className='font-semibold'>SUBCATEGORY(breed):</span>
          {data.petSubcategory}
        </div>

        <div>
          <span className='font-semibold'>PRICE:</span>
          N{data.petPrice}.00
        </div>

        <div>
          <span className='font-semibold'>AGE:</span>
          {data.petAge}
        </div>
        
        <div>
          <span className='font-semibold'>GENDER:</span>
          {data.petGender}
        </div>

        <div>
          <span className='font-semibold'>COLOR:</span>
          {data.petColor}
        </div>

        <div>
          <span className='font-semibold'>DATE OF BIRTH:</span>
          {new Date(data.petDateOfBirth).toLocaleDateString()}
        </div>

        <div>
          <span className='font-semibold'>CROSS-BREED-STATUS:</span>
          {data.petStatus}
        </div>
      </div>

      {showText && (
          <div className="text-gray-900 text-lg">
            <h3>Make Payments For {data.petName} </h3>
            <div>
              <span className='font-semibold'>Amount to be Sent:</span>
              N{data.petPrice}.00
            </div>
            <div>
              <span className='font-semibold'>ACCOUNT NUMBER TO COMPLETE TRANSFER:</span>
              2027485428
            </div>

            <div>
              <span className='font-semibold'>BANK DESTINATION TO COMPLETE TRANSFER:</span>
             KUDA MICRO FINANCE
            </div>

            <div>
              <span className='font-semibold'>BANK ACCOUNT NAME TO COMPLETE TRANSFER:</span>
              UZOEFUNA BENSON
            </div>
          </div>
        )}

      <button onClick={handleAcquireClick} className="w-full lg:w-1/2 h-[50px] bg-orange-300 rounded-md hover:border hover:border-orange-300 hover:bg-teal-200 text-gray-900 ">Acquire this Pet</button>
    </div>
  );
};

export default Pet;
