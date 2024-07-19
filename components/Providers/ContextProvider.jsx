"use client";
import { cardData } from "@/lib/data";
import { createContext, useEffect, useState } from "react";
//create context provider
export const CardProviderContext = createContext(null);

export default function ContextProvider({ children }) {
  //Search State
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState("");

  //Option Search State
  const [optionFilterData, setOptionFilterData] = useState("");

  //Buy State
  const [buyCards, setBuyCards] = useState([]);

  //BrandName Option
  const [brandName, setBrandName] = useState("");

  //Price Option
  const [choosePrice, setChoosePrice] = useState("");

  //People Option
  const [choosePeople, setChoosePeople] = useState("");

  //Admin Data
  const [adminInfo, setAdminInfo] = useState("");

  useEffect(() => {
    if (brandName || choosePrice || choosePeople) {
      const splitPrice = choosePrice.split(" to ");
      const filterData = cardData.filter((item) => {
        if (brandName && item.name == brandName) {
          return item;
        } else if (
          choosePrice &&
          item.price >= splitPrice[0] &&
          item.price <= splitPrice[1]
        ) {
          return item;
        } else if (choosePeople && item.gender == choosePeople) {
          return item;
        }
      });
      setOptionFilterData(filterData);
    }
  }, [brandName, choosePrice, choosePeople]);

  return (
    <CardProviderContext.Provider
      value={{
        searchText,
        setSearchText,
        searchResult,
        setSearchResult,
        buyCards,
        setBuyCards,

        brandName,
        setBrandName,
        choosePrice,
        setChoosePrice,
        choosePeople,
        setChoosePeople,

        optionFilterData,
        setOptionFilterData,

        adminInfo,
        setAdminInfo,
      }}
    >
      {children}
    </CardProviderContext.Provider>
  );
}
