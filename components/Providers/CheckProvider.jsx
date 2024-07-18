"use client";
import { createContext, useState } from "react";

export const checkContextProvider = createContext(null);
export default function CheckProvider({ children }) {
  const [checkAdminLogin, setCheckAdminLogin] = useState(false);
  console.log(checkAdminLogin);

  return (
    <checkContextProvider.Provider
      value={{ checkAdminLogin, setCheckAdminLogin }}
    >
      {children}
    </checkContextProvider.Provider>
  );
}
