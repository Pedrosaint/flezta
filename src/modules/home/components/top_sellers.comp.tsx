'use client';

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SellerImage from "@/assets/images/woman.png";
import StarIcon, {
  AppleIcon,
  DashboardIcon,
} from "../../../assets/svg/svg_icon";
import HoverImage from "@/assets/images/hover.png";
import useTopSellersHook from "../hooks/useTopSellers.hook";

const TopSellersComp = () => {
  const { scrollToTopSmooth } = useTopSellersHook();
  const sellers = [
    {
      id: 1,
      name: "Easy Fashion Ltd.",
      location: "Newcastle, England",
      rating: 4.3,
      reviews: 98,
    },
    {
      id: 2,
      name: "Easy Fashion Ltd.",
      location: "Newcastle, England",
      rating: 4.3,
      reviews: 98,
    },
    {
      id: 3,
      name: "Easy Fashion Ltd.",
      location: "Newcastle, England",
      rating: 4.3,
      reviews: 98,
    },
    {
      id: 4,
      name: "Easy Fashion Ltd.",
      location: "Newcastle, England",
      rating: 4.3,
      reviews: 98,
    },
    {
      id: 5,
      name: "Easy Fashion Ltd.",
      location: "Newcastle, England",
      rating: 4.3,
      reviews: 98,
    },
    {
      id: 6,
      name: "Easy Fashion Ltd.",
      location: "Newcastle, England",
      rating: 4.3,
      reviews: 98,
    },
    {
      id: 7,
      name: "Easy Fashion Ltd.",
      location: "Newcastle, England",
      rating: 4.3,
      reviews: 98,
    },
  ];

  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < Math.floor(rating)} />
      ))}
    </div>
  );

  return (
    <div className="p-8 bg-[#F3F4F6]">
      <div className="container mx-auto mt-10 mb-13">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Top Sellers</h1>

        {/* Promotional Banner */}
        <div className="bg-gradient rounded-3xl overflow-hidden mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="flex-1 -mb-22 relative w-full h-[400px]">
              <Image
                src={SellerImage}
                alt="Happy shopper"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Buy More For Less
                <br />
                with <span className="text-primary-color">Bundle Buy</span>
              </h2>
              <p className="text-primaryy-color font-medium mb-6 text-lg">
                Enjoy bulk purchase from your favorite sellers and pay
                <br />
                less for more.
              </p>
              <button
                onClick={() => scrollToTopSmooth()}
                className="w-[280px] p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] cursor-pointer"
              >
                <div className="w-full bg-secondary-color text-primary-color py-4 rounded-[14px] text-center font-semibold">
                  Shop Now
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg group overflow-hidden"
            >
              {/* Hover Effect Box */}
              <div className="absolute inset-0 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center">
                <Image src={HoverImage} alt="" fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Apple Logo */}
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-50 transition-colors duration-300">
                  <AppleIcon />
                </div>

                {/* Seller Info */}
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-white transition-colors duration-300">
                  {seller.name}
                </h3>
                <p className="text-sm text-gray-900 group-hover:text-white mb-3">
                  {seller.location}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <RatingStars rating={seller.rating} />
                  <span className="text-sm text-gray-900 group-hover:text-white">
                    {seller.rating} ({seller.reviews} reviews)
                  </span>
                </div>

                {/* Arrow Button */}
                <button
                  onClick={() => scrollToTopSmooth()}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#fda106] group-hover:text-white"
                >
                  <ArrowUpRight
                    size={20}
                    className="text-gray-700 group-hover:hidden transition-colors duration-300"
                  />
                  <ArrowRight
                    size={20}
                    className="hidden group-hover:block text-white transition-colors duration-300"
                  />
                </button>
              </div>
            </div>
          ))}

          {/* Explore More Card */}
          <div
            onClick={() => scrollToTopSmooth()}
            className="bg-secondary-color border border-[#003625] rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center">
                <DashboardIcon />
              </div>
              <span className="text-[#077D58] font-semibold text-lg group-hover:text-[#003625] transition-colors duration-300">
                Explore More
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellersComp;