"use client";
import Image from "next/image";
import search from "../public/search.png";
import cart from "../public/cart.png";
import setting from "../public/setting.png";
import Link from "next/link";
import { CardProviderContext } from "@/components/Providers/ContextProvider";
import { useContext, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Setting from "./setting/setting";
import { checkContextProvider } from "./Providers/CheckProvider";
import AdminLogin from "./modals/adminLogin";

export default function Navbar() {
  //Buy State
  const { buyCards } = useContext(CardProviderContext);

  //check admin login state
  const { checkAdminLogin, setCheckAdminLogin } =
    useContext(checkContextProvider);

  const [checkSetting, setCheckSetting] = useState(false);
  const { data: session, status } = useSession();
  // console.log(session?.user.email);

  return (
    <>
      <header className="bg-[#1E1B4B] py-5 px-5 sticky top-0 z-50 border-b-2 border-[#1D4ED8]">
        <div className="flex items-center justify-between max-w-[1440px] mx-auto">
          <div className="flex gap-10 items-center">
            <Link href={"/"}>
              <div className="flex gap-1 items-baseline">
                <Image
                  className="rounded-full"
                  src="https://media.istockphoto.com/id/813972528/vector/retro-deodorant-bottle-with-simple-water-spray-mist.jpg?s=612x612&w=0&k=20&c=p6K3ttdg1UkwfRbnvew3Rbq46IBTKFKyGbdjt0G8RDk="
                  width={50}
                  height={50}
                  alt="logo"
                />
                <h1 className="text-[#DB2777] text-lg">
                  <span className="text-3xl">O</span>nline{" "}
                  <span className="text-3xl">S</span>hop
                </h1>
              </div>
            </Link>
            <ul className="text-[#FFFFFF] flex gap-5 text-xl">
              <li>Home</li>
              <li>Promotions</li>
            </ul>
          </div>

          <div className="flex gap-5 items-center">
            <Image className="w-[30px] h-[30px]" src={search} alt="search" />

            <Link href={"/buy_card"}>
              <div className="relative">
                <Image className=" w-[30px] h-[30px]" src={cart} alt="cart" />
                {buyCards.length > 0 && (
                  <div className="bg-[#CC0000] w-[30px] min-w-fit h-[30px] min-h-fit rounded-full absolute -top-5 -right-4 text-center">
                    <span className="text-white text-xl font-medium p-2">
                      {buyCards.length}
                    </span>
                  </div>
                )}
              </div>
            </Link>

            <div
              className="cursor-pointer"
              onClick={() => setCheckSetting(!checkSetting)}
            >
              <Image
                className="w-[30px] h-[30px]"
                src={setting}
                alt="setting"
              />
            </div>

            <div className="flex gap-2">
              <div>
                <Link href={"/register"}>
                  <button className="bg-[#DB2777] hover:bg-[#be0e5d] px-3 py-1 rounded-md text-[#D9D9D9] text-xl">
                    Register
                  </button>
                </Link>
              </div>
              <div className="border border-white"></div>
              <div>
                {session?.user?.email ? (
                  <button
                    onClick={() => signOut()}
                    className="px-1 py-1 rounded-md text-[#D9D9D9] text-xl"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link href={"/signIn"}>
                    <button className="px-1 py-1 rounded-md text-[#D9D9D9] text-xl">
                      Sing In
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="fixed w-full z-50">
        <Setting checkSetting={checkSetting} setCheckSetting={setCheckSetting} />
      </div>

      {checkAdminLogin && (
        <div className="fixed w-full z-50 inset-0 backdrop-blur-sm bg-slate-900 bg-opacity-25">
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
            <AdminLogin />
          </div>
        </div>
      )}
    </>
  );
}
