"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoIosArrowDown } from "react-icons/io"
export default function Button(props){
    const pathname=usePathname()
    return(
        <div className={`flex gap-2 items-center border-2 rounded-md text-xl  ${pathname == props.pathName ? props.activeClassName : props.primaryClassName} `}>
            {
                props.arrow ? (
                    <>
                    <Link className={`flex gap-2 items-center px-4 py-1 ${pathname=== props.pathName ? "text-[#FFFFFF]" : ""}`} href={props.pathName}> <span>{props.text} </span> <IoIosArrowDown /></Link>
                    </>
                ):(
                    <Link className={`px-4 py-1 ${pathname=== props.pathName ? "text-[#FFFFFF]" : ""}`} href={props.pathName}>{props.text}</Link>
                )
            }
        </div>
    )
}