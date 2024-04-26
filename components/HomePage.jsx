import Image from "next/image";
import perfume1 from "@/public/perfume1.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="bg-[#1E1B4B] w-full h-screen pt-5">
        <h1 className="text-primary text-2xl font-semibold text-center">
          {" "}
          <span className="text-xl">All Perfume</span>{" "}
          <p className="text-3xl -mt-1">in this Store</p>
        </h1>
      <div className="px-[240px] grid grid-cols-3 gap-5 mt-5">
        <div className="bg-[#2E1065] p-3 rounded-md">
          <div className="">
            <div className="bg-white w-full h-[200px] rounded-md">
              <Image
                src={perfume1}
                alt="perfume1"
                width={180}
                height={180}
                className="mx-auto"
              />
            </div>
            <div className="bg-[#1E1B4B] px-2 pt-4 pb-2 flex flex-col gap-3">
              <h1 className="text-primary text-xl font-semibold">Perfume Name</h1>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="flex justify-between">
                <div>
                <span className="text-primary text-xl font-semibold">
                  Price -
                </span>
                <span className="text-primary text-xl font-medium px-4">25000</span>
                </div>
                <Link href={"/about"}>
                <button className="bg-primary py-2 px-4 rounded-md text-white font-semibold hover:bg-[#c21c69] transition-colors duration-200">Read More</button>
                </Link>
              </div>
              <button className="bg-[#1D4ED8] text-white text-xl font-medium py-2 rounded-md hover:bg-[#19388e] transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#2E1065] p-3 rounded-md">
          <div className="">
            <div className="bg-white w-full h-[200px] rounded-md">
              <Image
                src={perfume1}
                alt="perfume1"
                width={180}
                height={180}
                className="mx-auto"
              />
            </div>
            <div className="bg-[#1E1B4B] px-2 pt-4 pb-2 flex flex-col gap-3">
              <h1 className="text-primary text-xl font-semibold">Perfume Name</h1>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="flex justify-between">
                <div>
                <span className="text-primary text-xl font-semibold">
                  Price -
                </span>
                <span className="text-primary text-xl font-medium px-4">25000</span>
                </div>
                <Link href={"/about"}>
                <button className="bg-[#db2777] py-2 px-4 rounded-md text-white font-semibold hover:bg-[#c21c69] transition-colors duration-200">Read More</button>
                </Link>
              </div>
              <button className="bg-[#1D4ED8] text-white text-xl font-medium py-2 rounded-md hover:bg-[#19388e] transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#2E1065] p-3 rounded-md">
          <div className="">
            <div className="bg-white w-full h-[200px] rounded-md">
              <Image
                src={perfume1}
                alt="perfume1"
                width={180}
                height={180}
                className="mx-auto"
              />
            </div>
            <div className="bg-[#1E1B4B] px-2 pt-4 pb-2 flex flex-col gap-3">
              <h1 className="text-primary text-xl font-semibold">Perfume Name</h1>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="flex justify-between">
                <div>
                <span className="text-primary text-xl font-semibold">
                  Price -
                </span>
                <span className="text-primary text-xl font-medium px-4">25000</span>
                </div>
                <Link href={"/about"}>
                <button className="bg-[#db2777] py-2 px-4 rounded-md text-white font-semibold hover:bg-[#c21c69] transition-colors duration-200">Read More</button>
                </Link>
              </div>
              <button className="bg-[#1D4ED8] text-white text-xl font-medium py-2 rounded-md hover:bg-[#19388e] transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
