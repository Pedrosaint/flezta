import Image from "next/image";
import AppliancesImage from "@/assets/images/electronic.png";

const NewsletterComp = () => {
  return (
    <div className="w-full bg-[#FBF6F0] ">
      <div className="container mx-auto py-16 flex justify-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          {/* Left */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold">
              Subscribe to Our Newsletter to Get
              <br />
              Latest News & Updates
            </h2>

            <div className="flex mt-6 gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-5 rounded-[14px] border border-gray-300"
              />
              <button className="group w-[280px] p-0.5 border border-[#003625] rounded-[18px] cursor-pointer">
                <div className="w-full bg-[#003625] text-white py-5 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                  Subscribe
                </div>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/4 flex justify-center relative h-[360px]">
            <Image
              src={AppliancesImage}
              alt="Appliances"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterComp;
