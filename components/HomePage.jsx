"use client";
import Link from "next/link";
import { cardData } from "@/lib/data";
import { CardProviderContext } from "@/ContextProvider/ContextProvider";
import { useContext, useState } from "react";

export default function HomePage() {
  //search state
  const { searchText, searchResult, buyCards, setBuyCards } =
    useContext(CardProviderContext);

  //click to Buy
  const clickToBuy = (id) => {
    const buyCard = cardData.filter((item) => {
      if (item.id === id) {
        if (item.quantity > 0) {
          item["quantity"] = item.quantity + 1;
        } else {
          item["quantity"] = 1;
        }
        return item.id === id;
      }
    })[0];

    if(buyCards){
      const check=buyCards.includes(buyCard)
      if(check){
        return
      }else{
      setBuyCards([...buyCards, buyCard]);
      }
    }else{
      setBuyCards([...buyCards, buyCard]);
    }
  };

  return (
    <>
      <div className="bg-[#1E1B4B] w-full h-auto py-5">
        <h1 className="text-primary text-2xl font-semibold text-center">
          {" "}
          <span className="text-xl">All Perfume</span>{" "}
          <p className="text-3xl -mt-1">in this Store</p>
        </h1>

        <div className="px-[240px] grid grid-cols-3 gap-5 mt-5">
          {searchText
            ? searchResult.map((card) => (
                <div
                  key={card.id}
                  className="bg-[#2E1065] p-3 rounded-md h-[500px]"
                >
                  <div className="h-full">
                    <div className="bg-white w-full h-[200px] rounded-md">
                      <img
                        src={card.image}
                        alt="perfume name"
                        width={180}
                        height={180}
                        className="mx-auto"
                      />
                    </div>

                    <div className="bg-[#1E1B4B] h-[280px] px-2 pt-4 pb-2 flex flex-col gap-3">
                      <h1 className="text-primary text-xl font-semibold">
                        {card.name}
                      </h1>

                      <p className="text-white h-[100px]">
                        {card.description.length > 120
                          ? card.description.substring(0, 120) + ". . ."
                          : card.description}
                      </p>

                      <div className="flex justify-between">
                        <div>
                          <span className="text-primary text-xl font-semibold">
                            Price -
                          </span>
                          <span className="text-primary text-xl font-medium px-4">
                            {card.price}
                          </span>
                        </div>
                        <Link href={"/about"}>
                          <button className="bg-primary py-2 px-4 rounded-md text-white font-semibold hover:bg-[#c21c69] transition-colors duration-200">
                            {card.readButton}
                          </button>
                        </Link>
                      </div>
                      <button
                        onClick={() => clickToBuy(card.id)}
                        className="bg-[#1D4ED8] text-white text-xl font-medium py-2 rounded-md hover:bg-[#19388e] transition-colors duration-200"
                      >
                        {card.buyButton}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : cardData.map((card) => (
                <div
                  key={card.id}
                  className="bg-[#2E1065] p-3 rounded-md h-[500px]"
                >
                  <div className="h-full">
                    <div className="bg-white w-full h-[200px] rounded-md">
                      <img
                        src={card.image}
                        alt="perfume name"
                        width={180}
                        height={180}
                        className="mx-auto"
                      />
                    </div>

                    <div className="bg-[#1E1B4B] h-[280px] px-2 pt-4 pb-2 flex flex-col gap-3">
                      <h1 className="text-primary text-xl font-semibold">
                        {card.name}
                      </h1>

                      <p className="text-white h-[100px]">
                        {card.description.length > 120
                          ? card.description.substring(0, 120) + ". . ."
                          : card.description}
                      </p>

                      <div className="flex justify-between">
                        <div>
                          <span className="text-primary text-xl font-semibold">
                            Price -
                          </span>
                          <span className="text-primary text-xl font-medium px-4">
                            {card.price}
                          </span>
                        </div>
                        <Link href={"/about"}>
                          <button className="bg-primary py-2 px-4 rounded-md text-white font-semibold hover:bg-[#c21c69] transition-colors duration-200">
                            {card.readButton}
                          </button>
                        </Link>
                      </div>
                      <button
                        onClick={() => clickToBuy(card.id)}
                        className="bg-[#1D4ED8] text-white text-xl font-medium py-2 rounded-md hover:bg-[#19388e] transition-colors duration-200"
                      >
                        {card.buyButton}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
