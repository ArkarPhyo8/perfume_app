"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoIosArrowDown } from "react-icons/io"
export default function Button(props){
    const pathname=usePathname()
    return(
        <div className={`flex gap-2 items-center px-4 py-1 border-2 rounded-md text-xl cursor-pointer ${pathname == props.pathName ? "bg-[#1D4ED8] border-[#1D4ED8]" : "bg-[#1E1B4B] border-[#1E1B4B]"} `}>
            {
                props.arrow ? (
                    <>
                    <Link className={`${pathname=== props.pathName ? "text-[#FFFFFF]" : ""}`} href={props.pathName}>{props.text}</Link>
                    <IoIosArrowDown />
                    </>
                ):(
                    <Link className={`${pathname=== props.pathName ? "text-[#FFFFFF]" : ""}`} href={props.pathName}>{props.text}</Link>
                    
                )
            }
        </div>
    )
}