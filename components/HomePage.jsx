"use client";
import Link from "next/link";
import { cardData } from "@/lib/data";
import { CardProviderContext } from "@/components/Providers/ContextProvider";
import { useContext, useState } from "react";
// import { useRouter } from "next/navigation";

export default function HomePage() {
  //search state
  const { searchText, searchResult, buyCards, setBuyCards, optionFilterData } =
    useContext(CardProviderContext);

  //click to Add Card
  const clickToBuy = (id) => {
    const buyCard = cardData.filter((cart) => {
      if (cart.id === id) {
        if (cart.quantity > 0) {
          cart["quantity"] = cart.quantity + 1;
        } else {
          cart["quantity"] = 1;
        }
        return cart;
      }
    })[0];

    if (buyCards) {
      const check = buyCards.includes(buyCard);
      if (check) {
        return;
      } else {
        setBuyCards([...buyCards, buyCard]);
      }
    } else {
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
            ? searchResult.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2E1065] p-3 rounded-md h-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-[#1E1B4B] w-full px-2 py-4 rounded flex flex-col gap-3">
                    <Link href={{ pathname: "/about", query: { id: item.id } }}>
                      <div className="space-y-3">
                        <div className="bg-white w-full h-[200px] rounded-md">
                          <img
                            src={item.image}
                            alt="perfume name"
                            width={180}
                            height={180}
                            className="mx-auto"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <h1 className="text-primary text-xl font-semibold">
                            {item.name}
                          </h1>

                          <p className="text-white h-[100px]">
                            {item.description.length > 120
                              ? item.description.substring(0, 120) + ". . ."
                              : item.description}
                          </p>

                          <div className="flex justify-between">
                            <div>
                              <span className="text-primary text-xl font-semibold">
                                Price -
                              </span>
                              <span className="text-primary text-xl font-medium px-1">
                                {item.price.toLocaleString("en-Us")} ks
                              </span>
                            </div>
                            <button className="bg-primary py-2 px-4 rounded-md text-white font-semibold hover:bg-[#c21c69] transition-colors duration-200">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <button
                      onClick={() => clickToBuy(item.id)}
                      className="bg-[#1D4ED8] w-full text-white text-xl font-medium py-2 rounded-md hover:bg-[#19388e] transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            : optionFilterData
            ? optionFilterData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2E1065] p-3 rounded-md h-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-[#1E1B4B] w-full px-2 py-4 rounded flex flex-col gap-3">
                    <Link href={{ pathname: "/about", query: { id: item.id } }}>
                      <div className="space-y-3">
                        <div className="bg-white w-full h-[200px] rounded-md">
                          <img
                            src={item.image}
                            alt="perfume name"
                            width={180}
                            height={180}
                            className="mx-auto"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <h1 className="text-primary text-xl font-semibold">
                            {item.name}
                          </h1>

                          <p className="text-white h-[100px]">
                            {item.description.length > 120
                              ? item.description.substring(0, 120) + ". . ."
                              : item.description}
                          </p>

                          <div className="flex justify-between">
                            <div>
                              <span className="text-primary text-xl font-semibold">
                                Price -
                              </span>
                              <span className="text-primary text-xl font-medium px-1">
                                {item.price.toLocaleString("en-Us")} ks
                              </span>
                            </div>
                            <button className="bg-primary py-2 px-4 rounded-md text-white font-semibold hover:bg-[#c21c69] transition-colors duration-200">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <button
                      onClick={() => clickToBuy(item.id)}
                      className="bg-[#1D4ED8] w-full text-white text-xl font-medium py-2 rounded-md hover:bg-[#19388e] transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            : cardData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2E1065] p-3 rounded-md h-full hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-[#1E1B4B] w-full px-2 py-4 rounded flex flex-col gap-3">
                    <Link href={{ pathname: "/about", query: { id: item.id } }}>
                      <div className="space-y-3">
                        <div className="bg-white w-full h-[200px] rounded-md">
                          <img
                            src={item.image}
                            alt="perfume name"
                            width={180}
                            height={180}
                            className="mx-auto"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <h1 className="text-primary text-xl font-semibold">
                            {item.name}
                          </h1>

                          <p className="text-white h-[100px]">
                            {item.description.length > 120
                              ? item.description.substring(0, 120) + ". . ."
                              : item.description}
                          </p>

                          <div className="flex justify-between">
                            <div>
                              <span className="text-primary text-xl font-semibold">
                                Price -
                              </span>
                              <span className="text-primary text-xl font-medium px-1">
                                {item.price.toLocaleString("en-Us")} ks
                              </span>
                            </div>
                            <button className="bg-primary py-2 px-4 rounded-md text-white font-semibold hover:bg-[#c21c69] transition-colors duration-200">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <button
                      onClick={() => clickToBuy(item.id)}
                      className="bg-[#1D4ED8] w-full text-white text-xl font-medium py-2 rounded-md hover:bg-[#19388e] transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
