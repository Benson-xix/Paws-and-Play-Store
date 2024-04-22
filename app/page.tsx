export const revalidate = 0;
import Link from "next/link";
import Banner from "./component/Banner";
import Contain from "./component/Contain";
import Footer from "./component/footer/Footer";
import Header from "./component/Header";
import PetCard from "./component/pets/PetCard";
import getPets, { IPetParams } from "@/action/getPets";
import NullData from "./component/NullData";

interface MainProps{
  searchParams: IPetParams;
}




export default async function Home({searchParams} : MainProps) {

  
  const pets = await getPets(searchParams);
  console.log(searchParams);

  function shuffleArray(array: any){
    for(let i = array.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array
}

const shuffledPets = shuffleArray(pets)

  return (
    <main className="flex min-h-screen flex-col   font-mono  gap-3 bg-teal-200">
      <Header/>

      <div className="flex-grow bg-teal-200 text-teal-200"> 
    <div className="md:p-8"> 
    <Contain>
      <div>
        <Banner/>
      </div>

      <Link href="/admin"  className="text-rose-500 mb-3 ">
        admin
      </Link>

      {pets.length === 0 ? (
              <NullData title='Oops! No pets found. Click "all" to clear filters' />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-3">
                {shuffledPets.map((pet: any) => (
                  <PetCard key={pet.id} pet={pet} />
                ))}
              </div>
            )}

    </Contain>
      </div>
      </div>

      <Footer/>
    </main>
  );
}
