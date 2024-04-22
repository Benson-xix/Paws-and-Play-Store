import Admin  from "@/models/Admin";
import {  NextResponse } from "next/server";
import connect from "@/Utils/database";
import bcrypt from "bcrypt";


export const POST = async (request:any) => {
  const { email, password } = await  request.json();
   
  await connect();

  const existingAdmin = await Admin.findOne({email});

  if (existingAdmin) {
    return new NextResponse("Admin Already exists", {status: 400})
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newAdmin = new Admin({
    email,
    password: hashedPassword
  })

  try {
    await newAdmin.save();
    return new NextResponse("Admin Added", {status:200})
  } catch (err: any ) {
    return new NextResponse(err, {
      status: 500,
    })
  }
}


