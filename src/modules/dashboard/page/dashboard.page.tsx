"use client";

import { AnimatePresence, motion } from "framer-motion";
import RecentPurchaseTracking from "../components/recent_purchase_tracking";
import ProfileCard from "../components/profile_card";
import DeliveryAddressCard from "../components/delivery_address_card";
import BecomeSellerBanner from "../components/become_seller_banner";
import RecentOrderHistory from "../components/recent_order_history";
import { useDashboardPageHook } from "../hooks/dashboard_page.hook";

const DashboardPage = () => {
  const { showTracking, handleCloseTracking } = useDashboardPageHook();

  return (
    <div className="space-y-6">
      {/* Recent Purchase Tracking */}
      <AnimatePresence>
        {showTracking && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <RecentPurchaseTracking onClose={handleCloseTracking} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="space-y-6">
        {/* Profile & Address */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Profile */}
          <ProfileCard />

          {/* Delivery Address */}
          <DeliveryAddressCard />
        </div>

        {/* Become a Seller */}
        <BecomeSellerBanner />

        {/* Recent Order History */}
        <RecentOrderHistory />
      </motion.div>
    </div>
  );
};

export default DashboardPage;
