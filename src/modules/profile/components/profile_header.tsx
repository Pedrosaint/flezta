"use client";

interface ProfileHeaderProps {
    setIsEditProfileModalOpen: (value: boolean) => void;
}

const ProfileHeader = ({ setIsEditProfileModalOpen }: ProfileHeaderProps) => {
    return (
        <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-medium">My Profile</h2>
                <button
                    onClick={() => setIsEditProfileModalOpen(true)}
                    className="group w-40 p-0.5 border border-[#FDA106] backdrop-blur-[10px] rounded-[18px] cursor-pointer"
                >
                    <div className="relative w-full rounded-[14px] overflow-hidden bg-gradient">
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                            <span className="text-[#FDA106] font-semibold">
                                Edit Profile
                            </span>
                        </div>

                        {/* Default State */}
                        <div className="relative z-10 py-4 font-semibold flex items-center justify-center text-black transition-opacity duration-300 group-hover:opacity-0">
                            Edit Profile
                        </div>
                    </div>
                </button>
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
