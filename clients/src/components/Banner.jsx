import react from "react";
import BannerCard from "./BannerCard";
export default function Banner() {
  return (
    <>
      <div className="bg-teal-100 px-4 lg:px-24 flex items-center">
        <div className="flex flex-col lg:flex-row w-full items-center gap-12 lg:gap-0   py-40 justify-between">
          <div className="flex px-6 items-center flex-col gap-4 md:w-1/2 md:items-start">
            <div className="text-5xl font-bold text-black">Buy And Sell Your Book <span className="text-blue-700">For The Best Prices</span></div>
            <div>
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Eum, repudiandae.
              consectetur adipisicing elit. At, ullam. consectetur adipici,
              ngendi expedita
            </div>
            <div className="flex flex-row gap-2">
            <input type='text' placeholder="Search Book Hear" className="py-1 px-2 rounded-sm"/>
            <button className="bg-black text-white font-bold py-1 px-2 rounded-sm" >Search</button>
          </div>
          </div>
          <div className="" > 
            <BannerCard />
          </div>
        </div>
      </div>
    </>
  );
}
