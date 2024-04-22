import { } from "next";
import connect from "@/Utils/database";
import Pet from "@/models/Pet";


type CustomRequest = Request & {
  query: {
    _id: string;
  };
};

export default async function DELETE(req: CustomRequest) {
  const _id = req.query._id;

  await connect();

  const pet = await Pet.findByIdAndDelete(_id);

  if (!pet) {
    return new Response("Pet not found", { status: 404 });
  }

  return Response.json(pet);
}
