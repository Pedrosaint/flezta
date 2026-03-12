import { Minus, Plus } from "lucide-react";
import { CenteredModal } from "@/shared/ui/components/modal.ui";
import { PrimaryButton } from "@/shared/ui/components/button.ui";
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
    <CenteredModal
      isOpen
      onClose={onClose}
      maxWidth="max-w-xl"
      closeOnBackdrop={false}
      className="overflow-y-auto max-h-[90vh]"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
        <h2 className="text-3xl font-bold text-gray-900">Negotiate Price</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
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
              Price: <span>${product.price.toFixed(2)}</span>
            </p>
          </div>
        </div>

        {/* Quantity */}
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

        {/* Price Selection */}
        <h4 className="text-xl text-gray-900 mb-4">
          How much would you like to pay?
        </h4>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { key: "330-1", label: "$330.00", sub: "10% off" },
            { key: "330-2", label: "$330.00", sub: "10% off" },
            { key: "custom", label: "Custom", sub: "Set your own price" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedOption(opt.key)}
              className={`border rounded-xl p-3 transition-all cursor-pointer flex flex-col items-start justify-start text-left
                ${selectedOption === opt.key
                  ? "border-[#077D58] bg-[#DDFFF4]"
                  : "border-gray-300 bg-white"
                }`}
            >
              <div className="text-2xl text-gray-900 mb-1">{opt.label}</div>
              <div className="text-sm font-medium text-[#077D58]">{opt.sub}</div>
            </button>
          ))}
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

        {/* Submit */}
        <PrimaryButton onClick={handleSubmit} fullWidth size="lg">
          Submit Offer
        </PrimaryButton>
      </div>
    </CenteredModal>
  );
};

export default NegotiatePriceModal;
