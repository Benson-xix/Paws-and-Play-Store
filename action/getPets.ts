import Pet, { IPet } from "@/models/Pet";
import connect from "@/Utils/database";

export interface IPetParams{
    category?: string | null;
    subcategory?: string | null;
    searchTerm?: string | null;
  }


  export default async function getPets(params: IPetParams) {
    try {
        await connect();
    
        const { category, subcategory, searchTerm } = params;

        let searchString = searchTerm;

        if(!searchTerm){
          searchString = ''
        }
    
        let query: any = {};
    
        if (category !== null && category !== undefined) {
          query.petCategory = category;
        }
    
        if (subcategory !== null && subcategory !== undefined) {
          query.petSubcategory = subcategory;
        }
    
        if (searchTerm) {
          query.petName = { $regex: new RegExp(searchTerm, "i") };
        }
    
        const pets: IPet[] = await Pet.find(query);
    
        return pets;
      } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch pets");
      }

  }