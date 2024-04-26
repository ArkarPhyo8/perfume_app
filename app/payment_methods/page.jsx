import Image from "next/image";
import k_pay from "@/public/k_pay.png";
import wave from "@/public/wave.png";
import mpu from "@/public/mpu.png"
import Link from "next/link";
import KbzScan from "@/components/KbzScan";
import WaveScan from "@/components/WaveScan";
import MpuScan from "@/components/MpuScan";
export default function PaymentMethods() {
  return (
    <div className="bg-main-bg-color w-full h-screen">
      <div className="text-center bg-[#1E1B4B] py-4 text-2xl text-primary font-semibold">
        Payment Methods
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 px-[240px]">
        <div className="bg-white h-auto rounded-md">
          <div className="text-center py-2 text-xl font-semibold text-primary bg-[#1E1B4B] rounded-t">
            Paying with Phone Number
          </div>
          <div className="space-y-2 py-4 px-2">
            <div className="bg-[#003267] rounded-md px-6 py-3">
              <Image src={k_pay} alt="KBZ Pay" />

              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="text-white flex flex-col gap-2">
                  <h1 className="text-xl">Name</h1>
                  <h2 className="text-md">Owner Name</h2>
                </div>
                <div className="text-white flex flex-col gap-2">
                  <h1 className="text-xl">Phone</h1>
                  <h2 className="text-md">09 420523234</h2>
                </div>
              </div>
            </div>

            <div className="bg-[#1E1B4B] rounded-md px-6 py-3">
              <Image src={wave} alt="wave money" />

              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="text-white flex flex-col gap-2">
                  <h1 className="text-xl">Name</h1>
                  <h2 className="text-md">Owner Name</h2>
                </div>
                <div className="text-white flex flex-col gap-2">
                  <h1 className="text-xl">Phone</h1>
                  <h2 className="text-md">09 420523234</h2>
                </div>
              </div>
            </div>

            <div className="bg-[#1E1B4B] rounded-md px-6 py-3">
              <Image src={mpu} alt="MPU" />

              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="text-white flex flex-col gap-2">
                  <h1 className="text-xl">Name</h1>
                  <h2 className="text-md">Owner Name</h2>
                </div>
                <div className="text-white flex flex-col gap-2">
                  <h1 className="text-xl">Phone</h1>
                  <h2 className="text-md">09 420523234</h2>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white h-auto rounded-md">
          <div className="text-center py-2 text-xl font-semibold text-primary bg-[#1E1B4B] rounded-t">
            Use scan to pay me
          </div>
          <div>
            <ul className="bg-[#003267] flex justify-evenly px-4 py-3">
              <li>
                <Link href={"/"}><span className="text-[#FFFFFF] text-xl">KBZ Pay</span></Link>
              </li>
              <li>
                <Link href={"/"}><span className="text-[#FFE822] text-xl">wave money</span></Link>
              </li>
              <li>
                <Link href={"/"}><span className="text-[#0E58C1] text-xl">MPU</span></Link>
              </li>
            </ul>

            {/* <KbzScan/> */}
            {/* <WaveScan/> */}
            <MpuScan/>
          </div>
        </div>
      </div>
    </div>
  );
}
