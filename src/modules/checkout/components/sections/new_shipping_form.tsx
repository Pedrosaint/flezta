import { DropdownIcon } from "@/assets/svg/svg_icon";
import PhoneInput from "@/shared/ui/components/phone_input.ui";

interface NewShippingFormProps {
    saveInfo: boolean;
    setSaveInfo: (val: boolean) => void;
    setAsDefault: boolean;
    setSetAsDefault: (val: boolean) => void;
}

const NewShippingForm = ({ saveInfo, setSaveInfo, setAsDefault, setSetAsDefault }: NewShippingFormProps) => {
    return (
        <div className="rounded-2xl mb-6 max-w-3xl">
            <h3 className="font-semibold text-lg mb-6">
                OR Enter another shipping information
            </h3>

            {/* First & Last Name */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium mb-2">First name</label>
                    <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Last name</label>
                    <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                    />
                </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Email address</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                    />
                </div>

                <div>
                    <PhoneInput />
                </div>
            </div>

            {/* Country / State / Zip */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <div className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none flex justify-between items-center">
                        <span>Select country</span>
                        <DropdownIcon />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">State</label>
                    <div className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none flex justify-between items-center">
                        <span>Select state</span>
                        <DropdownIcon />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Zip code</label>
                    <input
                        type="text"
                        placeholder="Enter zip code"
                        className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                    />
                </div>
            </div>

            {/* Street Address */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Street address</label>
                <input
                    type="text"
                    placeholder="Enter street address"
                    className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                />
            </div>

            {/* Checkboxes */}
            <div className="flex gap-8">
                <label className="flex items-center gap-3 text-sm font-medium cursor-pointer">
                    <input
                        type="checkbox"
                        checked={saveInfo}
                        onChange={(e) => setSaveInfo(e.target.checked)}
                        className="checkbox"
                    />
                    Save this information for next time
                </label>

                <label className="flex items-center gap-3 font-medium text-sm cursor-pointer">
                    <input
                        type="checkbox"
                        checked={setAsDefault}
                        onChange={(e) => setSetAsDefault(e.target.checked)}
                        className="checkbox"
                    />
                    Set as default shipping address
                </label>
            </div>
        </div>
    );
};

export default NewShippingForm;
