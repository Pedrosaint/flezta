import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets/svg/svg_icon";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 24;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center 2xl:gap-50 py-8">
      {/* Page Info */}
      <div className="flex items-center justify-center gap-3">
        <span className="text-gray-700 font-medium">Page</span>

        {/* Page Number Box */}
        <div
          className="w-13 h-12 flex items-center justify-center border-2 border-gray-300 rounded-xl font-medium"
        >
          {currentPage}
        </div>

        <span className="text-gray-900">of {totalPages}</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`p-3.5 rounded-[18px] border-2 transition-all ${
            currentPage === 1
              ? "border-gray-300 text-gray-400 cursor-not-allowed"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          <ArrowLeftIcon />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-[60px] p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] cursor-pointer"
        >
          <div className="w-full bg-primary-color py-3 rounded-[14px] text-center justify-center flex font-semibold">
            <ArrowRightIcon stroke="white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
