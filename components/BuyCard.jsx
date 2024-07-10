"use client";
import { CardProviderContext } from "@/components/Providers/ContextProvider";
import Button from "@/lib/button";
import Link from "next/link";
import { useContext } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";

export default function BuyCard() {
  const { buyCards, setBuyCards } = useContext(CardProviderContext);
  const clickToDelete = (id) => {
    const deleteCard = buyCards.filter((card) => card.id !== id);
    setBuyCards(deleteCard);
  };

  const increased = (id) => {
    const increaseCard = buyCards.map((card) => {
      if (card.id === id) {
        if (card.quantity > 0) {
          card["quantity"] = card.quantity + 1;
        }
      }
      return card;
    });
    setBuyCards([ ...increaseCard]);
  };

  const decreased = (id) => {
    const decreaseCard= buyCards.map((card) => {
      if (card.id === id) {
        if (card.quantity >= 2) {
          card["quantity"] = card.quantity - 1;
        }
      }
      return card
      
    });
    setBuyCards([...decreaseCard]);
    
 
    
  };

  return (
    <div className="col-span-2 space-y-4">
      {buyCards.length > 0 ? (
        buyCards.map((card, index) => (
          <div
            key={index}
            className="relative flex gap-1 w-full bg-[#1E1B4B] border-2 border-[#1E1B4B] rounded-md group"
          >
            <div
              onClick={() => clickToDelete(card.id)}
              className="absolute text-white text-xl rounded-full -right-2 -top-4 bg-[#CC0000] p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <AiOutlineClose />
            </div>

            <img
              src={card.image}
              alt="perfume1"
              width={200}
              height={150}
              className="bg-white rounded-l-md"
            />

            <div className="text-white w-full">
              <div className="flex justify-between px-5 py-3">
                {" "}
                <div className="w-[40%] flex justify-between">
                  <span>Price</span>
                  <span>-</span>{" "}
                </div>{" "}
                <span>{card.price} MMK</span>{" "}
              </div>

              <div className="border-solid border-t border-slate-50">
                {" "}
                <div className="flex justify-between px-5 py-3">
                  <div className="w-[40%] flex justify-between">
                    <span>Quantity</span>
                    <span>-</span>{" "}
                  </div>{" "}
                  <span>{card.quantity}</span>{" "}
                </div>
              </div>

              <div className="border-solid border-t border-slate-50">
                {" "}
                <div className="w-[40%] flex items-center gap-8 px-5 py-3">
                  <span onClick={() => decreased(card.id)} className="cursor-pointer">
                    <AiOutlineMinusCircle />
                  </span>
                  <span>{card.quantity}</span>
                  <span onClick={() => increased(card.id)} className="cursor-pointer">
                    <AiOutlinePlusCircle />
                  </span>{" "}
                </div>
              </div>

              <div className="border-dashed border-t border-slate-50">
                {" "}
                <div className="flex justify-between px-5 py-3">
                  <div className="w-[40%] flex justify-between">
                    <span>Total</span>
                    <span>-</span>
                  </div>
                  <span>{(card.price * card.quantity).toLocaleString("en-Us")} Ks</span>{" "}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-[40%]">
          <div className="flex flex-col gap-5 justify-center">
            <div className="text-white text-xl">Can't Choose Cards</div>
            <Link href={"/"}>
              <Button text={"Choose Cards"} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
