
import connect from "@/Utils/database";
import Pet from "@/models/Pet";
import { getServerSession } from "next-auth";




export  async function DELETE(request: Request , { params }: { params: { id: string } }) {
    

    const session = await getServerSession();



    if (!session) {
      return new Response( "Unauthorized", { status: 401 });
    }
  
    await connect();

    const pet = await  Pet.findOneAndDelete({ _id: params.id,});

    return new Response(JSON.stringify(pet), { status: 200 });
    

}
