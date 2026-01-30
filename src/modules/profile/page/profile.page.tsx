"use client";

import ProfileHeader from "../components/profile_header";
import DeliveryAddressSection from "../components/delivery_address_section";
import EditProfileModal from "../modal/edit_profile";
import { useProfilePageHook } from "../hooks/profile_page.hook";

const ProfilePage = () => {
    const {
        isEditProfileModalOpen,
        deliveryAddresses,
        setIsEditProfileModalOpen,
        handleEditProfileClose
    } = useProfilePageHook();

    return (
        <div className="pb-10">
            {/* Profile Header */}
            <ProfileHeader setIsEditProfileModalOpen={setIsEditProfileModalOpen} />

            {/* Delivery Address Section */}
            <DeliveryAddressSection addresses={deliveryAddresses} />

            {/* Edit Profile Modal */}
            <EditProfileModal
                isOpen={isEditProfileModalOpen}
                onClose={handleEditProfileClose}
            />
        </div>
    );
};

export default ProfilePage;