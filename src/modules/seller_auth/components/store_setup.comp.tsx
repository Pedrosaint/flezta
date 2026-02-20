"use client"

import { FileIcon } from "@/assets/svg/svg_icon"
import { sellerAccountSetupRoute } from "@/core/routes/routeNames"
import { useRouter } from "next/navigation"

const StoreSetupComp = () => {
    const router = useRouter();
    return (
        <div className="">
            <h2 className="text-2xl font-semibold">Store Setup</h2>
            <p className="text-sm text-gray-600 mt-1">
                Set up your stores by providing the following information
            </p>

            <div className="mt-10 space-y-6">
                {/* Select Row */}
                <div className="grid grid-cols-1 grid-cols-2 gap-4">

                    <div className="flex-1">
                        <label className="text-sm text-gray-600">Name of store</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="text-sm text-gray-600">Contract email</label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="text-sm text-gray-600">Contact phone number</label>
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="text-sm text-gray-600">
                            Country
                        </label>
                        <div className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none">
                            <select className="w-full">
                                <option value="">Select option</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex-1">
                        <label className="text-sm text-gray-600">
                            State
                        </label>
                        <div className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none">
                            <select className="w-full">
                                <option value="">Select option</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex-1">
                        <label className="text-sm text-gray-600">ZIP code</label>
                        <input
                            type="text"
                            placeholder="Enter zip code"
                            className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none"
                        />
                    </div>
                </div>

                {/* Upload Box */}
                <div>
                    <label className="text-sm text-gray-600">Store logo</label>
                    <div className="mt-2 border border-[#C4C8CE] rounded-[16px] h-32 flex flex-col items-center justify-center text-gray-500 cursor-pointer">
                        <input type="file" className="hidden" />
                        <FileIcon />
                        <label className="text-sm">Click here to upload</label>
                        <span className="text-xs mt-1">Format: PDF, JPG, PNG</span>
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={() => router.push(sellerAccountSetupRoute)}
                    //  disabled={!isAuthenticated}
                    className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                    <div className="w-full bg-primary-color text-white py-3 rounded-[14px] font-semibold">
                        Save & Continue
                    </div>
                </button>
            </div>
        </div>
    )
}

export default StoreSetupComp
