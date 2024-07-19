"use client";
import { useContext, useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";
import { checkContextProvider } from "../Providers/CheckProvider";
import { CardProviderContext } from "../Providers/ContextProvider";

export default function Navbar() {

  const {adminInfo, setAdminInfo} = useContext(CardProviderContext)

  const { checkAdminLogin } = useContext(checkContextProvider);

  const getAdminData = async () => {
    const res = await fetch("/api/adminAccount");
    const adminData = await res.json();
    const admin = adminData.adminData[0];
    console.log("Hello");
    setAdminInfo(admin);
  };
  useEffect(() => {
    console.log("Hello U");
    getAdminData();
  }, [checkAdminLogin]);
  return <>{adminInfo ? <AdminNavbar /> : <UserNavbar />}</>;
}
