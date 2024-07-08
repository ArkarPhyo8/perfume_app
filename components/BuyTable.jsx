import Button from "@/lib/button";
import Link from "next/link";

export default function BuyTable() {
  return (
    <div className="bg-white h-[70vh] pb-6 col-span-3 rounded-md">
      <div className="bg-[#1E1B4B] rounded-t border-b border-[#DB2777]">
        <h1 className="text-[#DB2777] text-lg text-center py-4">
          <span className="text-3xl">O</span>nline{" "}
          <span className="text-3xl">S</span>hop
        </h1>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-slate-400">
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Charges apply</th>
          </tr>
        </thead>
        <tbody className="border-dashed border-b-2 border-slate-500">
          <tr>
            <td className="px-4 py-2 text-center">1.</td>
            <td className="px-4 py-2 text-center">Perfume Name</td>
            <td className="px-4 py-2 text-center">2</td>
            <td className="px-4 py-2 text-right">24000 MMK</td>
            <td className="px-4 py-2 text-right">45000 MMK</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">2.</td>
            <td className="px-4 py-2 text-center">Perfume Name</td>
            <td className="px-4 py-2 text-center">4</td>
            <td className="px-4 py-2 text-right">24000 MMK</td>
            <td className="px-4 py-2 text-right">45000 MMK</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">3.</td>
            <td className="px-4 py-2 text-center">Perfume Name</td>
            <td className="px-4 py-2 text-center">1</td>
            <td className="px-4 py-2 text-right">24000 MMK</td>
            <td className="px-4 py-2 text-right">45000 MMK</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">4.</td>
            <td className="px-4 py-2 text-center">Perfume Name</td>
            <td className="px-4 py-2 text-center">6</td>
            <td className="px-4 py-2 text-right">24000 MMK</td>
            <td className="px-4 py-2 text-right">45000 MMK</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">5.</td>
            <td className="px-4 py-2 text-center">Perfume Name</td>
            <td className="px-4 py-2 text-center">2</td>
            <td className="px-4 py-2 text-right">24000 MMK</td>
            <td className="px-4 py-2 text-right">45000 MMK</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="text-center text-lg font-bold">Total -</td>
            <td className="text-right px-4 py-2 font-semibold">458920 MMK</td>
          </tr>
        </tfoot>
      </table>

      <div className="text-center mt-5">
        <Link href={"/payment_methods"}>
          <Button text={"Payment Methods"}/>
        </Link>
      </div>
    </div>
  );
}
