"use client";

import { useContext, useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import Link from "next/link";
import ChoosePrice from "./ChoosePrice";
import ChoosePeople from "./ChoosePeople";
import BrandName from "./BrandName";
import { CardProviderContext } from "@/components/Providers/ContextProvider";
export default function SearchNavbar() {
  //Option values collection
  const [selectedObjects, setSelectedObjects] = useState([]);
  //Option values
  const [selectedBrandName, setSelectedBrandName] = useState("");
  const [selectedChoosePrice, setSelectedChoosePrice] = useState("");
  const [selectedChoosePeople, setSelectedChoosePeople] = useState("");

  //Home Page data to show all
  const {
    setSearchText,
    setBrandName,
    setChoosePrice,
    setChoosePeople,
    setOptionFilterData,
  } = useContext(CardProviderContext);

  useEffect(() => {
    setSelectedObjects([
      selectedBrandName,
      selectedChoosePrice,
      selectedChoosePeople,
    ]);
  }, [selectedBrandName, selectedChoosePrice, selectedChoosePeople]);

  //active color
  const [changeBgColor, setChangeBgColor] = useState(false);

  const clickToShowAll = () => {
    setChangeBgColor(true);
    setSearchText("");
    setBrandName("");
    setChoosePrice("");
    setChoosePeople("");
    setOptionFilterData("");
  };
  return (
    <>
      <div className="bg-[#1A062D] py-2 flex flex-col gap-2">
        <SearchBar />

        <div>
          <ul className="flex gap-5 items-center justify-center text-white text-xl">
            <li
              onClick={clickToShowAll}
              className={`border-2  px-4 py-1 rounded-md cursor-pointer transition-colors duration-200 ${
                changeBgColor
                  ? "bg-[#5633f2] border-[#5633f2]"
                  : "bg-[#1E1B4B] border-[#1E1B4B] hover:bg-[#6d54e0] hover:border-[#6d54e0]"
              }`}
            >
              <Link href={"/"}>All</Link>
            </li>

            <BrandName setSelectedBrandName={setSelectedBrandName} />

            <ChoosePrice setSelectedChoosePrice={setSelectedChoosePrice} />

            <ChoosePeople setSelectedChoosePeople={setSelectedChoosePeople} />
          </ul>
        </div>
      </div>
    </>
  );
}
