import { getServerSession } from "next-auth"
import { authOptions } from "./route"

export default async (req,res)=>{
  const session= await getServerSession(req,res,authOptions)
  console.log(session);
}