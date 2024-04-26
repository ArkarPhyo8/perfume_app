import Image from "next/image";
import perfume1 from "@/public/perfume1.png";

export default function AboutPage() {
  return (
    <div className="bg-[#1A062D] w-full h-screen px-[240px] pt-8">
      <div className="bg-[#2E1065] flex gap-5 rounded-md px-4 py-8">
        <Image src={perfume1} alt="perfume1" 
        className="bg-white rounded-md w-[200px] h-[200px]"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-primary text-xl font-medium">Perfume Name</h1>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="bg-button-color text-white text-lg font-medium px-4 py-2 rounded-md w-[20%]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
