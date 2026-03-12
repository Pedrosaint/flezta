"use client"

import { sellerPreviewRoute } from "@/core/routes/routeNames"
import { GradientButton, PrimaryButton } from "@/shared/ui/components/button.ui"
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
                        <GradientButton
                            onClick={() => router.push(sellerPreviewRoute)}
                            fullWidth
                        >
                            Save & Continue
                        </GradientButton>

                        <PrimaryButton fullWidth>
                            Skip
                        </PrimaryButton>
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