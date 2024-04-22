import { NextApiRequest } from "next";
import connect from "@/Utils/database";
import Pet, { IPet } from "@/models/Pet";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";






export  async function DELETE( req: NextApiRequest) {
  const {
    query: { id },
  } = req

  const session = await getServerSession();

  if (!session) {
    return new Response( "Unauthorized", { status: 401 });

  }

  await connect();

  const pet = await Pet.findByIdAndDelete(id as string);

  if (!pet) {
    return new Response('Pet not found', { status: 404 });
  }


  return Response.json(pet);



}
