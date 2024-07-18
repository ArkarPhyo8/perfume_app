import { connectToDatabase } from "@/helpers/server-helper";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

export const POST = async (req) => {
  const prisma = new PrismaClient();
  try {
    const { name, email, password } = await req.json();
    // console.log("name -", name ,email , password);

    if (!name || !email || !password)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("hashedPassword -", hashedPassword);
    await connectToDatabase();
    const user = await prisma.user.create({
      data: { name, email, hashedPassword },
    });
    return NextResponse.json(
      { user },
      { message: "successfully", status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
