import React from 'react';

const ProfileCard = () => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm w-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
                <div className="flex flex-col gap-2">
                    <div className="bg-[#FFF5BC] text-gray-900 px-6 py-2 border border-[#E26E00] rounded-full text-sm font-medium">
                        50% Completed
                    </div>
                    <button className="gradient-text text-sm font-medium">
                        Update Profile
                    </button>
                </div>
            </div>

            {/* Profile Content */}
            <div className="flex flex-col items-start gap-6">
                <div className='flex items-center gap-6'>
                    {/* Avatar */}
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>

                    {/* Info and Progress */}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                            Otor John Stephen
                        </h3>
                        <p className="text-gray-600 mb-1">
                            uiuxotor
                        </p>
                        <p className="text-gray-600 mb-6">
                            +234 8130000000
                        </p>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-200 overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-[#077D58] transition-all duration-300"
                        style={{ width: '50%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;