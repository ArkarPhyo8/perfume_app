"use client";
import search from "@/public/search.png";
import Image from "next/image";
import { useContext, useState } from "react";
import { cardData } from "@/lib/data";
import { CardProviderContext } from "@/ContextProvider/ContextProvider";

export default function SearchBar() {
  //Search State
  const { setSearchText, setSearchResult } = useContext(CardProviderContext);
  const [searchContent, setSearchContent] = useState("");

  const filterCard = (searchContent) => {
    const regex = new RegExp(searchContent, "i");
    //to test card content
    const filterData = cardData.filter((item) => regex.test(item.name));
    return filterData;
  };

  const searchClick = () => {
    if(searchContent){
      setSearchText(searchContent);
      const searchResult = filterCard(searchContent);
      setSearchResult(searchResult);
      setSearchContent("");
    }
  };

  return (
    <>
      <div className="w-[600px] mx-auto relative flex items-center text-white">
        <input
          className="bg-[#1A062D] border-2 border-[#1E1B4B] px-4 py-2 w-full rounded-full outline-none"
          type="text"
          placeholder="Search"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
             searchClick()
            }
          }}
        />
        <div className="absolute right-0 px-5 h-full bg-[#2E1065] border-l-2 border-[#1E1B4B] rounded-r-full grid items-center cursor-pointer hover:bg-[#1E1B4B]">
          <Image onClick={searchClick} src={search} alt="search" />
        </div>
      </div>
    </>
  );
}
