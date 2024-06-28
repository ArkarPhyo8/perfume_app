//This ContextProvider file is used for Search State.
// page.jsx(main),SearchBar.jsx and HomePage.jsx include in this state.

"use client";
import { createContext, useState } from "react";
//create context provider
export const CardProviderContext = createContext(null);

export default function ContextProvider({ children }) {
  //Search State
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState("");

  //Buy State
  const [buyCards, setBuyCards] = useState([]);


  return (
    <CardProviderContext.Provider
      value={{
        searchText,
        setSearchText,
        searchResult,
        setSearchResult,
        buyCards,
        setBuyCards,
      }}
    >
      {children}
    </CardProviderContext.Provider>
  );
}
