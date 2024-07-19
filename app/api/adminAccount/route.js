import { connectToDatabase } from "@/helpers/server-helper";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

//Admin Get
export async function GET() {
  try {
    await connectToDatabase();
    const adminData = await prisma.admin.findMany();
    return NextResponse.json(
      { adminData },
      { message: "Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("error -", error);
    return NextResponse.json({ message: "Failed" }, { status: 400 });
  }
}

//Admin Post
export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    await connectToDatabase();

    const admin = await prisma.admin.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json(
      { admin: admin },
      { message: "Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("error - ", error);
    return NextResponse.json({ message: "Failed" }, { status: 200 });
  }
}
