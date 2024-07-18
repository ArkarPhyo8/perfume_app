"use client";
import { CardProviderContext } from "@/components/Providers/ContextProvider";
import Button from "@/lib/button";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function BuyTable() {
  const { buyCards } = useContext(CardProviderContext);
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    let total = 0;
    buyCards.map((card) => {
      const totalPrice = card.price * card.quantity;
      total += totalPrice;
    });
    setTotalAmount(total);
    
  });
  

  return (
    <div className="bg-white h-[70vh] col-span-3 rounded-md sticky top-[120px] flex flex-col justify-between">
      <div>
      <div className="bg-[#1E1B4B] rounded-t border-b border-[#DB2777]">
        <h1 className="text-[#DB2777] text-lg text-center py-4">
          <span className="text-3xl">O</span>nline{" "}
          <span className="text-3xl">S</span>hop
        </h1>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-slate-400">
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Charges apply</th>
          </tr>
        </thead>
        <tbody className="border-dashed border-b-2 border-slate-500">
          {buyCards.map((card, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-center">{index + 1}.</td>
              <td className="px-4 py-2 text-center">{card.name}</td>
              <td className="px-4 py-2 text-center">{card.quantity}</td>
              <td className="px-4 py-2 text-right">{card.price.toLocaleString("en-Us")}</td>
              <td className="px-4 py-2 text-right">
                {(card.quantity * card.price).toLocaleString("en-Us")}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center text-lg font-bold">Total -</td>
            <td className="text-right px-4 py-2 font-semibold">{totalAmount.toLocaleString("en-Us")} Ks</td>
          </tr>
        </tfoot>
      </table>
      </div>

      <div className="text-center mb-1">
        <Link href={"/checkout"}>
          <Button text={"Checkout"} />
        </Link>
      </div>
    </div>
  );
}
