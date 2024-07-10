import BuyCard from "@/components/BuyCard";
import BuyTable from "@/components/BuyTable";

export default function BuyCardPage() {
  return (
    <>
    <div className="bg-main-bg-color w-full h-fit min-h-svh pl-[240px] pr-[120px] py-12">
      <div className="grid grid-cols-5 gap-4">
      <BuyCard />
      <BuyTable />
      </div>
    </div>
    </>
  );
}
