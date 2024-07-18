"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function SingInModal() {
 

  //Sing in form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await signIn("credentials", {
      name,
      email,
      password,
      callbackUrl: "/",
    });
  };
  return (
    <>
      <div className="bg-main-bg-color w-full mx-auto py-10 px-10 rounded relative">
        <Link href={"/"}>
          <div
            className="text-white hover:text-red-600 text-5xl absolute opacity-25 hover:opacity-100 -right-3 -top-3 cursor-pointer hover:scale-125 transition-transform duration-200"
          >
            <IoClose />
          </div>
        </Link>

        <div className="space-y-10">
          <h1 className="text-center text-xl font-medium">Sing In</h1>
          <div className="flex flex-col gap-1">
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

            <div className="flex flex-col gap-2 w-full">
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
          </div>

          <button
            type="submit"
            onClick={handleSignIn}
            className="bg-blue-500 w-full rounded py-2 text-white text-xl font-normal hover:bg-blue-600 transition-colors duration-200"
          >
            Sign In
          </button>

          <div className="flex gap-2 justify-center">
            <h1>New here?</h1>
            <Link href={"/register"} className="text-blue-500 underline">Account Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}
