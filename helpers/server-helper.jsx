import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("connect to database");
  } catch (error) {
    console.log("error -", error);
    throw new Error("Unable to connect to database");
  }
};
