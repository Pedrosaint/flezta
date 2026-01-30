"use client";

import ReceiptModal from "../modal/receipt.modal";
import { useOrderHistory } from "../hooks/useOrderHistory";
import OrderTabs from "../components/OrderTabs";
import OrdersList from "../components/OrdersList";

const OrderHistoryPage = () => {
  const {
    activeTab,
    setActiveTab,
    filteredOrders,
    receiptModal,
    setReceiptModal,
    counts,
    handleViewReceipt,
    navigateToDetails,
    receiptData,
    receiptItems,
    formatCurrency,
  } = useOrderHistory();

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      {/* Header */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">
          Order History
        </h1>
        <p className="text-normal text-gray-800">
          View and manage your order list.
        </p>
      </div>

      {/* Tabs */}
      <OrderTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={counts}
      />

      {/* Order Count */}
      <h2 className="text-normal font-medium text-gray-900 mb-6">
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Order -{" "}
        {filteredOrders.length} total orders
      </h2>

      {/* Orders List */}
      <OrdersList
        orders={filteredOrders}
        handleViewReceipt={handleViewReceipt}
        navigateToDetails={navigateToDetails}
      />

      {receiptData && (
        <ReceiptModal
          isOpen={receiptModal}
          onClose={() => setReceiptModal(false)}
          orderData={receiptData}
          items={receiptItems}
          formatCurrency={formatCurrency}
        />
      )}
    </div>
  );
};

export default OrderHistoryPage;
