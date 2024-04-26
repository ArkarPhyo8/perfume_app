"use client";
import Image from "next/image";
import search from "@/public/search.png";
import Button from "@/lib/Button";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import  {categoryData}  from "@/app/category/page"
export default function SearchNavbar() {
  const [isClick, setIsClick] = useState(false);
  const [selected,setSelected] = useState("")

  return (
    <>
      <div className="bg-[#1A062D] py-2 flex flex-col gap-2">
        <div className="w-[600px] mx-auto relative flex items-center text-white">
          <input
            className="bg-[#1A062D] border-2 border-[#1E1B4B] px-4 py-2 w-full rounded-full outline-none"
            type="text"
            placeholder="Search"
          />
          <div className="absolute right-0 px-5 h-full bg-[#2E1065] border-l-2 border-[#1E1B4B] rounded-r-full grid items-center">
            <Image src={search} />
          </div>
        </div>
        <div>
          <ul className="flex gap-5 items-center justify-center text-white text-xl">
            <li className="bg-[#1E1B4B] border-2 border-[#1E1B4B] px-4 py-1 rounded-md cursor-pointer">
              All
            </li>
            <li
              className="bg-[#1E1B4B] border-2 border-[#1E1B4B] px-4 py-1 rounded-md cursor-pointer relative flex gap-2 items-center"
              onClick={() => {
                setIsClick(!isClick);
              }}
            >
              {
                selected ? selected : "selected"
              }
               <IoIosArrowDown />
              {isClick && (
                <ul className={`absolute left-0 bg-[#1D4ED8] rounded-md w-full transition-all duration-700 ${isClick ? "top-[40px] opacity-100" : "top-[-50px] opacity-0"}`}>
                    {
                        categoryData?.map((item,index)=>(
                            <li key={index} className={`hover:bg-[#1E1B4B] px-4 py-2 ${selected === item.name ? "bg-[#1E1B4B]":""}`} onClick={()=>{
                                setSelected(item.name)
                            }}>{item.name}</li>
                        ))
                    }
                </ul>
              )}
            </li>
            <li className="bg-[#1E1B4B] border-2 border-[#1E1B4B] px-4 py-1 rounded-md flex gap-2 items-center cursor-pointer">
              ChoosePrice <IoIosArrowDown />
            </li>
            <li className="bg-[#1E1B4B] border-2 border-[#1E1B4B] px-4 py-1 rounded-md flex gap-2 items-center cursor-pointer">
              ChoosePeople <IoIosArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
