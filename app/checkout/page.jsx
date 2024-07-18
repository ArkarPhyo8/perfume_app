"use client";

import { checkContextProvider } from "@/components/Providers/CheckProvider";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";

export default function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createAccountData, setCreateAccountData] = useState([]);

  //ues Session
  const { data: session, status } = useSession(null);

  //check context provider
  const { setCheckModal, checkModal } = useContext(checkContextProvider);

  const onCreateAccount = () => {
    setCreateAccountData([
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    ]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      {status === "loading" ? (
       <div className="fixed w-full z-50 inset-0 backdrop-blur-sm bg-slate-900 bg-opacity-25">
       <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
        <h1 className="text-3xl font-semibold">Loading ...</h1>
       </div>
     </div>
      ) : status === "authenticated" ? (
        <div>Authenticated successfully</div>
      ) : (
        <div className="bg-main-bg-color h-[90vh] py-5">
          <div className="bg-[#1E1B4B] w-[70%] h-[80vh] rounded-md mx-auto p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between border-b-2 border-pink-600 p-2">
                <h1 className="text-white text-xl font-medium">
                  Create Account
                </h1>
                <div className="flex gap-2 items-center">
                  <h1 className="text-white text-lg font-medium">
                    Already have an account?
                  </h1>
                  <button
                    onClick={() => setCheckModal(!checkModal)}
                    className="bg-[#DB2777] hover:bg-[#be0e5d] px-3 py-1 rounded-md text-[#D9D9D9] text-xl text-center"
                  >
                    Sing In
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="mt-5 flex gap-4 justify-between">
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      className="text-white font-medium"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="border-2 border-[#1A062D] rounded-md px-5 py-2 outline-2 outline-[#1A062D]  bg-[#1E1B4B] text-white text-xl font-medium"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label
                      className="text-white font-medium"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="border-2 border-[#1A062D] rounded-md px-5 py-2 outline-2 outline-[#1A062D]  bg-[#1E1B4B] text-white text-xl font-medium"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
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
                  <p className="text-white">
                    Use 8 or more character with a mix of letters, numbers and
                    symbols.Must not contain your name or username.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onCreateAccount}
              className="bg-[#DB2777] hover:bg-[#be0e5d] w-full px-4 py-2 rounded-md text-white text-xl font-medium"
            >
              Create account
            </button>
          </div>
        </div>
      )}
    </>
  );
}
