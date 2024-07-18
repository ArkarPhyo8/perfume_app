"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function RegisterModal() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error State
  const [error, setError] = useState(false);

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "post",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      router.push("/signIn");
    } else setError(true);
  };
  return (
    <div>
      <div className="bg-main-bg-color w-full mx-auto py-10 px-10 rounded relative">
        <Link href={"/"}>
          <div className="text-white hover:text-red-600 text-5xl absolute opacity-25 hover:opacity-100 -right-3 -top-3 cursor-pointer hover:scale-125 transition-transform duration-200">
            <IoClose />
          </div>
        </Link>

        <div className="space-y-10">
          <h1 className="text-white text-center text-xl font-medium">
            Register
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
            {/* <p className="text-white w-[50%]">
              Use 8 or more character with a mix of letters, numbers and
              symbols.Must not contain your name or username.
            </p> */}
          </form>

          <button
            type="submit"
            onClick={handleRegister}
            className="bg-blue-500 w-full rounded py-2 text-white text-xl font-normal hover:bg-blue-600 transition-colors duration-200"
          >
            Register
          </button>

          <div className="flex gap-2 justify-center">
            <h1 className="text-white ">Already have an account?</h1>
            <Link className="text-[#1D4ED8] underline" href={"/signIn"}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
