"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PetCardProps {
  pet:any
}

const PetCard : React.FC <PetCardProps> = ({pet}) => {


  const router = useRouter();

  return (
    <div  onClick={() => router.push(`/pet/${pet._id}`)} className="col-span-1 cursor-pointer text- rounded-md border-[1.2px] border-slate-200 text-orange-300  p-2 transition hover:scale-105 bg-gray-900 text-center text-sm">
      
      <div className="flex flex-col items-center w-full gap-1">
      <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={pet.petImages && pet.petImages.length > 0 ? pet.petImages[0] : undefined}
            alt={pet.petName}
            width={300}
            height={300}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="mt-4">
         {pet.petName}
        </div> 
        <div>
          {pet.petCategory} ({pet.petSubcategory})
        </div>
        <div className="font-semibold">N{pet.petPrice}.00</div>
      </div>
    </div>
  )
}

export default PetCard
