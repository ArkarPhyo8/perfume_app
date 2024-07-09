"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = async () => {
    await signIn("credentials", {
      name,
      email,
      callbackUrl: "/",
    });
  };
  return (
    <div>
      <div className="bg-slate-500 w-[400px] mx-auto mt-16 py-10 px-10 rounded space-y-10">
        <h1 className="text-center text-xl font-medium">Create Account</h1>
        <div className="flex flex-col gap-4">
          <input
            className="border border-cyan-600 rounded py-2 px-4 outline-cyan-300"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 border-cyan-600 rounded py-2 px-4 outline-cyan-300"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSignIn}
          className="bg-blue-500 w-full rounded py-2 text-white text-xl font-normal hover:bg-blue-600 transition-colors duration-200"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
