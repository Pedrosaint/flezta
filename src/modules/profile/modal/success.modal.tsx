'use client';

import { useRouter } from "next/navigation";
import { GoodIcon } from "../../../assets/svg/svg_icon";
import { profileRoute } from "@/core/routes/routeNames";

interface SuccessModalProps {
    title?: string;
    description?: string;
    onClose?: () => void;
    primaryButtonText?: string;
}

const SuccessModal = ({
    title = "Congratulations",
    description = "You have successfully updated your delivery address",
    onClose,
    primaryButtonText = "Okay"
}: SuccessModalProps) => {
    const router = useRouter();

    const scrollToTopSmooth = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleAction = () => {
        scrollToTopSmooth();
        if (onClose) {
            onClose();
        } else {
            router.push(profileRoute);
        }
    };

    return (
        <div className="fixed bg-black/20 inset-0 flex items-center justify-center p-4 z-[100]">
            <div className=" p-2 border border-[#003625] rounded-3xl bg-transparent">
                <div className="bg-[#DDFFF4] rounded-2xl p-8 max-w-sm w-full text-center">
                    <div className="flex justify-center mb-6">
                        <GoodIcon width={50} height={50} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {title}
                    </h3>
                    <p className="text-gray-700 mb-5 whitespace-pre-line">
                        {description}
                    </p>

                    <button
                        onClick={handleAction}
                        className="w-50 p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer">
                        <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] font-semibold">
                            {primaryButtonText}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SuccessModal;
