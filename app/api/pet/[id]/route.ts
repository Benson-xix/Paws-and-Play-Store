import { NextApiRequest } from "next";
import connect from "@/Utils/database";
import Pet, { IPet } from "@/models/Pet";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";






export  async function DELETE({ params }: { params: { _id: string } }) {
  

  const session = await getServerSession();

  if (!session) {
    return new Response( "Unauthorized", { status: 401 });

  }

  await connect();

  const pet = await  Pet.findOneAndDelete({ _id: params._id,});



  return Response.json(pet);



}
