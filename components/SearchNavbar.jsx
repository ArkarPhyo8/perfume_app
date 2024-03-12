import Image from "next/image";
import search from "@/public/search.png"
import Button from "@/lib/Button";


export default function SearchNavbar(){
    return(
        <>
        <div className="bg-[#1A062D] py-2 flex flex-col gap-2">
         <div className="w-[600px] mx-auto relative flex items-center text-white">
            <input className="bg-[#1A062D] border-2 border-[#1E1B4B] px-4 py-2 w-full rounded-full outline-none" type="text" placeholder="Search" />
            <div className="absolute right-0 px-5 h-full bg-[#2E1065] border-l-2 border-[#1E1B4B] rounded-r-full grid items-center">
                <Image src={search}/>
            </div>
         </div>

         <div className="flex gap-5 items-center justify-center text-white">
           <Button activeClassName="bg-[#1D4ED8] border-[#1D4ED8] cursor-pointer" primaryClassName="bg-[#1E1B4B] border-[#1E1B4B] cursor-pointer" text="All" pathName="/all" />
           <Button activeClassName="bg-[#1D4ED8] border-[#1D4ED8] cursor-pointer" primaryClassName="bg-[#1E1B4B] border-[#1E1B4B] cursor-pointer" text="Category" arrow="arrow" pathName="/category" />
           <Button activeClassName="bg-[#1D4ED8] border-[#1D4ED8] cursor-pointer" primaryClassName="bg-[#1E1B4B] border-[#1E1B4B] cursor-pointer" text="Choose price" arrow="arrow" pathName="/choosePrice" />
           <Button activeClassName="bg-[#1D4ED8] border-[#1D4ED8] cursor-pointer" primaryClassName="bg-[#1E1B4B] border-[#1E1B4B] cursor-pointer" text="Choose people" arrow="arrow" pathName="/choosePeople" />
         </div>
        </div>
        </>
    )
}