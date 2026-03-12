"use client";

import { GradientButton } from "@/shared/ui/components/button.ui";

interface ProfileHeaderProps {
    setIsEditProfileModalOpen: (value: boolean) => void;
}

const ProfileHeader = ({ setIsEditProfileModalOpen }: ProfileHeaderProps) => {
    return (
        <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-medium">My Profile</h2>
                <GradientButton
                    onClick={() => setIsEditProfileModalOpen(true)}
                    className="w-40"
                >
                    Edit Profile
                </GradientButton>
            </div>

            <div className="flex items-start gap-6">
                {/* Profile Image */}
                <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>

                {/* Profile Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-10">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                                Otor John Stephen
                            </h3>
                            <p className="text-gray-600 mb-1">
                                uluxotor
                            </p>
                            <p className="text-gray-600">
                                +234 8130000000
                            </p>
                        </div>
                        <div className="w-[1.5px] h-16 bg-gray-200" />
                        <div className="max-w-md">
                            <h4 className="font-semibold text-gray-900 mb-1">
                                Residential address
                            </h4>
                            <p className="text-gray-600">
                                Sell new items or used items you no longer need or used items you no longer need
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
