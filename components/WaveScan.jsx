import qr_code from "@/public/qr_code.png";
import Image from "next/image";

export default function WaveScan() {
  return (
    <div className="bg-[#FFE822] p-6 mt-5 w-fit mx-auto rounded-md">
      <Image src={qr_code} alt="QR_Code" width={200} height={200} />
      <h1 className="font-semibold mt-5 text-xl text-center">Owner Name</h1>
      <h2 className="text-lg font-semibold mt-1 text-center">09 439284439</h2>
    </div>
  );
}
