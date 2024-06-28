"use client"
import { useState } from "react";
import { choosePriceData } from "@/lib/data";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillCaretUp } from "react-icons/ai";

export default function ChoosePrice({setSelectedChoosePrice}) {
  const [choosePriceClick, setChoosePriceClick] = useState(false);
  const [choosePrice, setChoosePrice] = useState("");
  return (
    <>
      <li className="relative min-w-[180px] w-[250px]">
        <div
          className="bg-[#1E1B4B] border-2 border-[#1E1B4B] px-4 py-1 rounded-md cursor-pointer flex gap-2 items-center justify-between"
          onClick={() => {
            setChoosePriceClick(!choosePriceClick);
          }}
        >
          {choosePrice ? (
            choosePrice
          ) : (
            <>
              <span>ChoosePrice</span>
            </>
          )}
          <IoIosArrowDown
            className={`transition-all duration-200 ${
              choosePriceClick && "rotate-180"
            }`}
          />
        </div>

        <div
          className={`w-full absolute transition-all duration-200 cursor-pointer ${
            choosePriceClick
              ? "opacity-100 -translate-y-2"
              : "opacity-0 pointer-events-none translate-y-0"
          }`}
        >
          <div className="w-full max-w-[250px] flex justify-end px-3 relative z-0">
            <AiFillCaretUp className="text-4xl text-[#5633f2] -mb-[15px]" />
          </div>

          <ul
            className={`bg-[#5633f2] whitespace-nowrap space-y-1 rounded-md relative z-10 p-2`}
          >
            {choosePriceData?.map((item, index) => (
              <li
                key={index}
                className={`hover:bg-[#2E1065] rounded-md px-4 py-2 transition-all duration-200 ${
                  choosePrice === item.name && "bg-[#1E1B4B]"
                }`}
                onClick={() => {
                  setChoosePrice(item.name);
                  setChoosePriceClick(!choosePriceClick);
                  setSelectedChoosePrice({
                    id: item.id,
                    name: item.name,
                  });
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}
