"use client"

import { FileIcon } from "@/assets/svg/svg_icon";
import { sellerStoreSetupRoute } from "@/core/routes/routeNames";
import { useRouter } from "next/navigation";

const IdentityVerificationComp = () => {
  const router = useRouter();

  return (
    <div className="self-start">
      <h2 className="text-2xl font-semibold">Identity Verification</h2>
      <p className="text-sm text-gray-600 mt-1">
        Select your preferred verification option for quick validation
      </p>

      <div className="mt-10 space-y-6">
        {/* Select Row */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm text-gray-600">
              Select means of identification
            </label>
            <div className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none">
              <select className="w-full">
                <option value="">Select option</option>
              </select>
            </div>
          </div>

          <div className="flex-1">
            <label className="text-sm text-gray-600">ID number</label>
            <input
              type="text"
              placeholder="Enter number"
              className="mt-2 w-full border border-[#C4C8CE] rounded-[16px] px-4 py-3 outline-none"
            />
          </div>
        </div>

        {/* Upload Box */}
        <div>
          <label className="text-sm text-gray-600">Upload ID</label>
          <div className="mt-2 border border-[#C4C8CE] rounded-[16px] h-32 flex flex-col items-center justify-center text-gray-500 cursor-pointer">
            <input type="file" className="hidden" />
            <FileIcon />
            <label className="text-sm">Click here to upload</label>
            <span className="text-xs mt-1">Format: PDF, JPG, PNG</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => router.push(sellerStoreSetupRoute)}
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

export default IdentityVerificationComp
