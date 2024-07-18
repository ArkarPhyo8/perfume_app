"use client"
import { createContext, useState } from "react";

export const checkContextProvider = createContext(null);
export default function CheckProvider({ children }) {
  //check modal open && close
  const [checkModal, setCheckModal] = useState(false);
  return (
    <checkContextProvider.Provider value={{setCheckModal, checkModal}}>
      {children}
    </checkContextProvider.Provider>
  );
}
