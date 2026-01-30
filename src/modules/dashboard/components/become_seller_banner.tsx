"use client";


const BecomeSellerBanner = () => {
    return (
        <section className="bg-white rounded-[18px] p-6 shadow-sm flex justify-between items-center">
            <div>
                <h3 className="font-semibold text-[28px]">
                    Become a seller, List items now
                </h3>
                <p className="text-[18px] text-gray-700">
                    Sell new items or used items you no longer need
                </p>
            </div>

            <button
                type="button"
                className="group w-[200px] p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                <div className="w-full bg-[#003625] text-white py-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                    Sell Now
                </div>
            </button>
        </section>
    );
};

export default BecomeSellerBanner;
