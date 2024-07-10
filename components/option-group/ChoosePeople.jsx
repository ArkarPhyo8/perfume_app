"use client";
import { useContext, useState } from "react";
import { choosePeopleData } from "@/lib/data";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillCaretUp } from "react-icons/ai";
import { CardProviderContext } from "../Providers/ContextProvider";
import { cardData } from "@/lib/data";

export default function ChoosePeople({ setSelectedChoosePeople }) {
  const { choosePeople, setChoosePeople, setBrandName, setChoosePrice } =
    useContext(CardProviderContext);
  const [choosePeopleClick, setChoosePeopleClick] = useState(false);
  return (
    <>
      <li className="relative min-w-[180px] w-[250px]">
        <div
          className="bg-[#1E1B4B] border-2 border-[#1E1B4B] px-4 py-1 rounded-md cursor-pointer flex gap-2 items-center justify-between"
          onClick={() => {
            setChoosePeopleClick(!choosePeopleClick);
          }}
        >
          {choosePeople ? (
            choosePeople
          ) : (
            <>
              <span>ChoosePeople</span>
            </>
          )}
          <IoIosArrowDown
            className={`transition-all duration-200 ${
              choosePeopleClick && "rotate-180"
            }`}
          />
        </div>

        <div
          className={`w-full absolute transition-all duration-200 cursor-pointer ${
            choosePeopleClick
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
            {choosePeopleData?.map((item, index) => (
              <li
                key={index}
                className={`hover:bg-[#2E1065] rounded-md px-4 py-2 transition-all duration-200 ${
                  choosePeople === item.name && "bg-[#1E1B4B]"
                }`}
                onClick={() => {
                  setChoosePeopleClick(!choosePeopleClick);
                  setSelectedChoosePeople({
                    id: item.id,
                    name: item.name,
                  });
                  setChoosePeople(item.name);
                  setBrandName("");
                  setChoosePrice("");
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
