import { Minus, Plus, X } from "lucide-react";
import useNegotiatePriceModalHook from "../hook/useNegotiatePriceModal.hook";

interface ModalProps {
  onClose: () => void;
}

const NegotiatePriceModal = ({ onClose }: ModalProps) => {
  const {
    selectedOption,
    setSelectedOption,
    customPrice,
    setCustomPrice,
    product,
    handleSubmit,
    decreaseQuantity,
    increaseQuantity,
    quantity,
  } = useNegotiatePriceModalHook(onClose);

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-4xl max-w-xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-3xl font-bold text-gray-900">Negotiate Price</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Product Info */}
          <div className="flex items-center gap-4 mb-5">
            <img
              src={product.image.src}
              alt={product.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-600 text-xl">
                Price: <span className="">${product.price.toFixed(2)}</span>
              </p>
            </div>
          </div>

          {/* Question */}
          <h4 className="text-xl text-gray-900 mb-4">
            How many item are you picking?
          </h4>

          <div className="flex items-center gap-1 mb-2">
            <button
              onClick={decreaseQuantity}
              className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="w-16 h-10 text-center text-xl border-2 border-gray-300 rounded-xl flex items-center justify-center">
              {quantity}
            </div>
            <button
              onClick={increaseQuantity}
              className="w-10 h-10 border bg-[#DDFFF4] border-[#003625] text-[#003625] rounded-xl flex items-center justify-center cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Question */}
          <h4 className="text-xl text-gray-900 mb-4">
            How much would you like to pay?
          </h4>

          {/* Price Options */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Preset Option 1 */}
            <button
              onClick={() => setSelectedOption("330-1")}
              className={`border rounded-xl p-3 transition-all cursor-pointer
            flex flex-col items-start justify-start text-left
            ${
              selectedOption === "330-1"
                ? "border-[#077D58] bg-[#DDFFF4]"
                : "border-gray-300 bg-white"
            }`}
            >
              <div className="text-2xl text-gray-900 mb-1">$330.00</div>
              <div className="text-sm font-medium text-[#077D58]">10% off</div>
            </button>

            {/* Preset Option 2 */}
            <button
              onClick={() => setSelectedOption("330-2")}
              className={`border rounded-xl p-3 transition-all cursor-pointer
            flex flex-col items-start justify-start text-left
            ${
              selectedOption === "330-2"
                ? "border-[#077D58] bg-[#DDFFF4]"
                : "border-gray-300 bg-white"
            }`}
            >
              <div className="text-2xl text-gray-900 mb-1">$330.00</div>
              <div className="text-sm text-[#077D58]">10% off</div>
            </button>

            {/* Custom Option */}
            <button
              onClick={() => setSelectedOption("custom")}
              className={`border rounded-xl p-3 transition-all cursor-pointer
            flex flex-col items-start justify-start text-left
            ${
              selectedOption === "custom"
                ? "border-[#077D58] bg-[#DDFFF4]"
                : "border-gray-300 bg-white"
            }`}
            >
              <div className="text-2xl text-gray-900 mb-1">Custom</div>
              <div className="text-sm font-medium text-[#077D58]">
                Set your own price
              </div>
            </button>
          </div>

          {/* Custom Price Input */}
          {selectedOption === "custom" && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Enter your price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                  $
                </span>
                <input
                  type="text"
                  value={customPrice}
                  onChange={(e) => setCustomPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-2xl text-lg focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Note */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">Note:</span> You have 24 offer(s)
              remaining. We set a limit to make it easier for our members to
              manage and review offers.
            </p>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] cursor-pointer"
          >
            <div className="w-full bg-primary-color text-white py-4 rounded-[14px] text-center">
              Submit Offer
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NegotiatePriceModal;
