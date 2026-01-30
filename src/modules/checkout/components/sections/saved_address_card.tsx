import { DefaultIcon } from "@/assets/svg/svg_icon";

const SavedAddressCard = () => {
    return (
        <div className="rounded-4xl mb-6 border border-gray-200 max-w-4xl">
            <div className="flex justify-between rounded-t-4xl px-5 bg-[#F3F4F6] border-b border-gray-200">
                <h3 className="text-xl font-bold py-5 text-gray-700">
                    Saved Shipping Information
                </h3>
                <button className="gradient-text text-lg font-medium">
                    Change Address
                </button>
            </div>

            <div className="px-5 py-4 text-xl bg-[#F9FAFB] rounded-b-4xl">
                <p className="font-medium">Otor John Stephen</p>
                <p className="text-gray-600 text-lg">
                    38 Asheli, James Street, Jabi Abuja
                </p>

                <div className="flex gap-4 text-lg text-gray-600">
                    <span>myemail@address@gmail.com</span>
                    <span>08130000000</span>
                </div>

                <button className="text-[#077D58] text-[17px] flex items-center gap-1 mt-2">
                    <DefaultIcon />
                    Default address
                </button>
            </div>
        </div>
    );
};

export default SavedAddressCard;
