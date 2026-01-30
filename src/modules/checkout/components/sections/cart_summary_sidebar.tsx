interface CartSummarySidebarProps {
    handleProceedToPayment: () => void;
}

const CartSummarySidebar = ({ handleProceedToPayment }: CartSummarySidebarProps) => {
    return (
        <div className="bg-white rounded-4xl border border-gray-200 sticky top-40 h-full max-h-125">
            <h2 className="text-xl font-bold bg-gray-50 px-5 rounded-t-4xl border-b border-gray-200 py-6 text-gray-700">
                Cart Summary
            </h2>

            <div className="space-y-4 p-6">
                <div className="flex justify-between">
                    <span>Items total(8)</span>
                    <span className="font-semibold">$1,950.00</span>
                </div>

                <div className="flex justify-between">
                    <span>Delivery fee</span>
                    <span className="font-semibold">$5.99</span>
                </div>

                <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>$1,905.99</span>
                </div>
            </div>

            <div className="mt-35 p-5">
                <button
                    type="button"
                    onClick={handleProceedToPayment}
                    className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] cursor-pointer"
                >
                    <div className="w-full bg-primary-color text-white py-4 rounded-[14px] text-center font-semibold">
                        Proceed To Payment
                    </div>
                </button>
            </div>
        </div>
    );
};

export default CartSummarySidebar;
