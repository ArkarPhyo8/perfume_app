import Image from "next/image";
import search from "../public/search.png"
import cart from "../public/cart.png"
import setting from "../public/setting.png"
export default function Navbar() {
    return (
        <>
            <header className="bg-[#1E1B4B] py-5 px-5">
                <div className="flex items-center justify-between max-w-[1440px] mx-auto">
                    <div className="flex gap-10 items-center">
                        <div className="flex gap-1 items-baseline">
                            <Image className="rounded-full" src="https://media.istockphoto.com/id/813972528/vector/retro-deodorant-bottle-with-simple-water-spray-mist.jpg?s=612x612&w=0&k=20&c=p6K3ttdg1UkwfRbnvew3Rbq46IBTKFKyGbdjt0G8RDk="
                                width={50} height={50} alt="logo"/>
                            <h1 className="text-[#DB2777] text-lg"><span className="text-3xl">O</span>nline <span className="text-3xl">S</span>hop</h1>
                        </div>
                        <ul className="text-[#FFFFFF] flex gap-5 text-xl">
                            <li>Home</li>
                            <li>Promotions</li>
                        </ul>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Image className="w-[30px] h-[30px]" src={search} alt="search" />
                        <button className="bg-[#DB2777] px-3 py-1 rounded-md text-[#D9D9D9] text-xl">Log in</button>
                        <Image className="w-[30px] h-[30px]" src={cart} alt="cart"/>
                        <Image className="w-[30px] h-[30px]" src={setting} alt="setting"/>
                    </div>
                </div>
            </header>
        </>
    )
}