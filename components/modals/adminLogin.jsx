"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { checkContextProvider } from "../Providers/CheckProvider";

export default function RegisterModal() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //check admin login modal
  const {setCheckAdminLogin,checkAdminLogin}= useContext(checkContextProvider)
  //error State
  const [error, setError] = useState(false);

  const handleAdminLogin = async () => {
    const res = await fetch("/api/adminAccount", {
      method: "post",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      console.log("success");
      setCheckAdminLogin(!checkAdminLogin)
    } else setError(true);
  };
  return (
    <div>
      <div className="bg-main-bg-color w-full mx-auto py-10 px-10 rounded relative">
        
          <div onClick={()=>setCheckAdminLogin(!checkAdminLogin)} className="text-white hover:text-red-600 text-5xl absolute opacity-25 hover:opacity-100 -right-3 -top-3 cursor-pointer hover:scale-125 transition-transform duration-200">
            <IoClose />
          </div>
        

        <div className="space-y-10">
          <h1 className="text-white text-center text-xl font-medium">
            Create Admin Account
          </h1>

          {error && (
            <div className="my-4 text-center">
              An error has occurred.
              <br />
              Please try again later
            </div>
          )}
          <form className="flex flex-col gap-1">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-white font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="border-2 border-[#1A062D] rounded-md px-5 py-2 outline-2 outline-[#1A062D]  bg-[#1E1B4B] text-white text-xl font-medium"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-white font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="border-2 border-[#1A062D] rounded-md px-5 py-2 outline-2 outline-[#1A062D]  bg-[#1E1B4B] text-white text-xl font-medium"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="border-2 border-[#1A062D] rounded-md px-5 py-2 outline-2 outline-[#1A062D]  bg-[#1E1B4B] text-white text-xl font-medium"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>

          <button
            type="submit"
            onClick={handleAdminLogin}
            className="bg-blue-500 w-full rounded py-2 text-white text-xl font-normal hover:bg-blue-600 transition-colors duration-200"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
