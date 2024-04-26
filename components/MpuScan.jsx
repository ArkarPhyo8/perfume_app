import qr_code from "@/public/qr_code.png";
import Image from "next/image";

export default function MpuScan() {
  return (
    <div className="bg-[#0E58C1] p-6 mt-5 w-fit mx-auto rounded-md">
      <Image src={qr_code} alt="QR_Code" width={200} height={200} />
      <h1 className="text-white font-semibold mt-5">Owner Name (*****436)</h1>
    </div>
  );
}
