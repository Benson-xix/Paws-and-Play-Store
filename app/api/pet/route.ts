import connect from "@/Utils/database";
import Pet, { IPet } from "@/models/Pet"; 
import { getServerSession } from "next-auth";
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs/promises';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET,
});



export async function POST(
  req: Request,
) {
  const session = await getServerSession();



  if (!session) {
    return new Response( "Unauthorized", { status: 401 });
  }

  await connect();

  const {
    petName,
    petDescription,
    petCategory,
    petSubcategory,
    petColor,
    petImages,
    petGender,
    petPrice,
    petDateOfBirth,
    petAge,
    petStatus,
  } = await req.json();

  console.log(petImages);
  const url: any = [];

  if (petImages.length) {
    await Promise.all(
      petImages.map((image: any) =>
        new Promise<void>((resolve) => {
          cloudinary.uploader.upload(image, { public_id: petName }, (error, result) => {
            if (error) {
              console.error("Error uploading image:", error);
            } else {
              url.push(result?.secure_url);
              console.log("Result", result);
            }
            resolve();
          });
        })
      )
    );
  }

  const newPet: IPet = new Pet({
    petName,
    petDescription,
    petCategory,
    petSubcategory,
    petColor,
    petImages: url,
    petGender,
    petPrice,
    petDateOfBirth,
    petAge,
    petStatus,
  });

  await newPet.save();

  return Response.json({ message: "Pet created successfully", data: newPet });
}



