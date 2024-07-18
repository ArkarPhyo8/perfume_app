import Link from "next/link";
import { useContext } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { checkContextProvider } from "../Providers/CheckProvider";
export default function Setting({ checkSetting, setCheckSetting }) {
  //check admin login state
  const { checkAdminLogin, setCheckAdminLogin } =
    useContext(checkContextProvider);

  //check Setting and Admin Login Modal
  const checkHandler = () => {
    setCheckAdminLogin(!checkAdminLogin);
    setCheckSetting(checkAdminLogin);
  };

  return (
    <div
      className={`absolute w-[300px] h-[500px] bg-slate-400 p-4 transition-all duration-300  ${
        checkSetting ? "right-0" : "right-[-500px]"
      }`}
    >
      <div onClick={checkHandler}>
        <div className="text-white flex gap-3 items-center px-2 py-2 bg-[#2E1065] hover:bg-[#1E1B4B] transition-all duration-200 rounded-md cursor-pointer">
          <MdAdminPanelSettings className="text-3xl" />
          <h1 className="font-medium text-lg">Create Admin Account</h1>
        </div>
      </div>
    </div>
  );
}
