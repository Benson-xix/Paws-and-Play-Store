

import Pet from "@/models/Pet";
import connect from "@/Utils/database";



interface IParams {
  petId?: string;
}

export default async function getPetById(params: IParams) {
  await connect();
  try {

    

    const { petId } = params;

    const pet = await Pet.findOne({_id:petId});

    if(!pet){
      return null;
  }

  if(pet) {
    return pet;
  }

  Response.json({ data: pet });

  } catch (error) {
    console.error("Error fetching pet:", error);
    return Response.json({ message: "Internal server error" });
  }
}
