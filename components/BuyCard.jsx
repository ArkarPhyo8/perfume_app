import perfume1 from "@/public/perfume1.png";
import Image from "next/image";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";

export default function BuyCard() {
  return (
    <div className="col-span-2 space-y-4">
      <div className="relative flex gap-1 w-full bg-[#1E1B4B] border-2 border-[#1E1B4B] rounded-md group">
        <div className="absolute text-white text-xl rounded-full -right-2 -top-4 bg-[#CC0000] p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AiOutlineClose />
        </div>
        <Image
          src={perfume1}
          alt="perfume1"
          width={200}
          height={150}
          className="bg-white rounded-l-md"
        />
        <div className="text-white w-full">
          <div className="flex justify-between px-5 py-3">
            {" "}
            <div className="w-[30%] flex justify-between">
              <span>Price</span>
              <span>-</span>{" "}
            </div>{" "}
            <span>25000 MMK</span>{" "}
          </div>

          <div className="border-solid border-t border-slate-50">
            {" "}
            <div className="flex justify-between px-5 py-3">
              <div className="w-[30%] flex justify-between">
                <span>Quantity</span>
                <span>-</span>{" "}
              </div>{" "}
              <span>2</span>{" "}
            </div>
          </div>

          <div className="border-solid border-t border-slate-50">
            {" "}
            <div className="w-[30%] flex items-center gap-8 px-5 py-3">
              <span>
                <AiOutlineMinusCircle />
              </span>
              <span>2</span>
              <span>
                <AiOutlinePlusCircle />
              </span>{" "}
            </div>
          </div>

          <div className="border-dashed border-t border-slate-50">
            {" "}
            <div className="flex justify-between px-5 py-3">
              <div className="w-[30%] flex justify-between">
                <span>Total</span>
                <span>-</span>
              </div>
              <span>50000 MMK</span>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex gap-1 w-full bg-[#1E1B4B] border-2 border-[#1E1B4B] rounded-md group">
        <div className="absolute text-white text-xl rounded-full -right-2 -top-4 bg-[#CC0000] p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AiOutlineClose />
        </div>
        <Image
          src={perfume1}
          alt="perfume1"
          width={200}
          height={150}
          className="bg-white rounded-l-md"
        />
        <div className="text-white w-full">
          <div className="flex justify-between px-5 py-3">
            {" "}
            <div className="w-[30%] flex justify-between">
              <span>Price</span>
              <span>-</span>{" "}
            </div>{" "}
            <span>25000 MMK</span>{" "}
          </div>

          <div className="border-solid border-t border-slate-50">
            {" "}
            <div className="flex justify-between px-5 py-3">
              <div className="w-[30%] flex justify-between">
                <span>Quantity</span>
                <span>-</span>{" "}
              </div>{" "}
              <span>2</span>{" "}
            </div>
          </div>

          <div className="border-solid border-t border-slate-50">
            {" "}
            <div className="w-[30%] flex items-center gap-8 px-5 py-3">
              <span>
                <AiOutlineMinusCircle />
              </span>
              <span>2</span>
              <span>
                <AiOutlinePlusCircle />
              </span>{" "}
            </div>
          </div>

          <div className="border-dashed border-t border-slate-50">
            {" "}
            <div className="flex justify-between px-5 py-3">
              <div className="w-[30%] flex justify-between">
                <span>Total</span>
                <span>-</span>
              </div>
              <span>50000 MMK</span>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex gap-1 w-full bg-[#1E1B4B] border-2 border-[#1E1B4B] rounded-md group">
        <div className="absolute text-white text-xl rounded-full -right-2 -top-4 bg-[#CC0000] p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AiOutlineClose />
        </div>
        <Image
          src={perfume1}
          alt="perfume1"
          width={200}
          height={150}
          className="bg-white rounded-l-md"
        />
        <div className="text-white w-full">
          <div className="flex justify-between px-5 py-3">
            {" "}
            <div className="w-[30%] flex justify-between">
              <span>Price</span>
              <span>-</span>{" "}
            </div>{" "}
            <span>25000 MMK</span>{" "}
          </div>

          <div className="border-solid border-t border-slate-50">
            {" "}
            <div className="flex justify-between px-5 py-3">
              <div className="w-[30%] flex justify-between">
                <span>Quantity</span>
                <span>-</span>{" "}
              </div>{" "}
              <span>2</span>{" "}
            </div>
          </div>

          <div className="border-solid border-t border-slate-50">
            {" "}
            <div className="w-[30%] flex items-center gap-8 px-5 py-3">
              <span>
                <AiOutlineMinusCircle />
              </span>
              <span>2</span>
              <span>
                <AiOutlinePlusCircle />
              </span>{" "}
            </div>
          </div>

          <div className="border-dashed border-t border-slate-50">
            {" "}
            <div className="flex justify-between px-5 py-3">
              <div className="w-[30%] flex justify-between">
                <span>Total</span>
                <span>-</span>
              </div>
              <span>50000 MMK</span>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex gap-1 w-full bg-[#1E1B4B] border-2 border-[#1E1B4B] rounded-md group">
        <div className="absolute text-white text-xl rounded-full -right-2 -top-4 bg-[#CC0000] p-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AiOutlineClose />
        </div>
        <Image
          src={perfume1}
          alt="perfume1"
          width={200}
          height={150}
          className="bg-white rounded-l-md"
        />
        <div className="text-white w-full">
          <div className="flex justify-between px-5 py-3">
            {" "}
            <div className="w-[30%] flex justify-between">
              <span>Price</span>
              <span>-</span>{" "}
            </div>{" "}
            <span>25000 MMK</span>{" "}
          </div>

          <div className="border-solid border-t border-slate-50">
            {" "}
            <div className="flex justify-between px-5 py-3">
              <div className="w-[30%] flex justify-between">
                <span>Quantity</span>
                <span>-</span>{" "}
              </div>{" "}
              <span>2</span>{" "}
            </div>
          </div>

          <div className="border-solid border-t border-slate-50">
            {" "}
            <div className="w-[30%] flex items-center gap-8 px-5 py-3">
              <span>
                <AiOutlineMinusCircle />
              </span>
              <span>2</span>
              <span>
                <AiOutlinePlusCircle />
              </span>{" "}
            </div>
          </div>

          <div className="border-dashed border-t border-slate-50">
            {" "}
            <div className="flex justify-between px-5 py-3">
              <div className="w-[30%] flex justify-between">
                <span>Total</span>
                <span>-</span>
              </div>
              <span>50000 MMK</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
