"use client"

import { sellerVerifyRoute } from "@/core/routes/routeNames"
import { useRouter } from "next/navigation"

const AccountSetupComp = () => {
    const router = useRouter();
    return (
        <div>
            <div className="">
                <h2 className="text-2xl font-semibold">Account Setup</h2>
                <p className="text-sm text-gray-600 mt-1">
                    Please provide the correct bank details as this is where your sales payment will be sent to.
                </p>

                <div className="mt-10 space-y-6">
                    {/* Select Row */}
                    <div className="grid grid-cols-1 grid-cols-2 gap-4">

                        <div className="flex-1">
                            <label className="text-sm text-gray-600">Bank name</label>
                            <div className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none">
                                <select className="w-full">
                                    <option value="">Select option</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex-1">
                            <label className="text-sm text-gray-600">Account name</label>
                            <input
                                type="text"
                                placeholder="Enter number"
                                className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="text-sm text-gray-600">Contact phone number</label>
                            <input
                                type="text"
                                className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none"
                                disabled
                            />
                        </div>
                    </div>


                    {/* Button */}
                    <div className="flex gap-3 mt-10">
                        <button
                            onClick={() => router.push(sellerVerifyRoute)}
                            className="group w-full p-0.5 border border-[#FDA106] backdrop-blur-[10px] rounded-[18px] cursor-pointer"
                        >
                            <div className="relative w-full rounded-[14px] overflow-hidden bg-gradient">
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                    <span className="text-[#FDA106] flex gap-2 items-center">
                                        Save & Continue
                                    </span>
                                </div>

                                {/* Default State */}
                                <div className="relative z-10 py-4 font-semibold flex gap-2 items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                                    Save & Continue
                                </div>
                            </div>
                        </button>

                        {/*=== Skip Button ===*/}
                        <button
                            className="group w-full p-0.5 border border-[#003625] backdrop-blur-[10px] rounded-[18px] cursor-pointer"
                        >
                            <div className="relative w-full rounded-[14px] overflow-hidden bg-[#003625]">
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-[#DDFFF4] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                    <span className="text-[#003625] font-semibold flex gap-2 items-center">
                                        Skip
                                    </span>
                                </div>

                                {/* Default State */}
                                <div className="relative z-10 py-4 font-semibold flex gap-2 items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                                    Skip
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="bg-[#DDFFF4] text-black p-6 mt-40 rounded-[20px]">
                        <p className="text-sm">
                            You can skip this process now if you like and add the account details later in your profile.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSetupComp