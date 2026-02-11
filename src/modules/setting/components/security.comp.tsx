import React from "react";
import { EyeIcon, EyeOffIcon } from "@/assets/svg/svg_icon";
import { useSecuritySettingsHook } from "../hooks/security.hook";
import SuccessModal from "@/modules/profile/modal/success.modal";

const SecuritySettings: React.FC = () => {
  const {
    formState,
    showCurrentPassword,
    showNewPassword,
    showConfirmPassword,
    showSuccessModal,
    setShowSuccessModal,
    setShowCurrentPassword,
    setShowNewPassword,
    setShowConfirmPassword,
    handleChangePassword,
    handleFieldChange,
  } = useSecuritySettingsHook();

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Security Settings
      </h2>

      {/* Change Password Section */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Change password</h3>
        <p className="text-gray-600 mb-6">
          To change your password, kindly enter your current password and the
          new password you want to change to.
        </p>

        <div className="space-y-4">
          {/* Current Password */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Current password
            </label>
            <div className="flex items-center border border-gray-300 rounded-[16px] px-4 py-3 w-full max-w-[400px]">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={formState.currentPassword}
                onChange={(e) =>
                  handleFieldChange("currentPassword", e.target.value)
                }
                placeholder="Enter your current password"
                className="flex-1 outline-none border-none"
              />

              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showCurrentPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {/* New Password and Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* New Password */}
            <div className="w-full">
              <label className="block text-sm text-gray-700 mb-2">
                New password
              </label>
              <div className="flex items-center border border-gray-300 rounded-[16px] px-4 py-3 w-full gap-2">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={formState.newPassword}
                  onChange={(e) =>
                    handleFieldChange("newPassword", e.target.value)
                  }
                  placeholder="Enter a new password"
                  className="flex-1 outline-none border-none"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showNewPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="w-full">
              <label className="block text-sm text-gray-700 mb-2">
                Confirm new password
              </label>
              <div className="flex items-center border border-gray-300 rounded-[16px] px-4 py-3 w-full gap-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formState.confirmPassword}
                  onChange={(e) =>
                    handleFieldChange("confirmPassword", e.target.value)
                  }
                  placeholder="Enter your new password again"
                  className="flex-1 outline-none border-none"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
          </div>

          {/* Change Password Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleChangePassword}
              className="group w-[200px] p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                Change Password
              </div>
            </button>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <SuccessModal
          title="Congratulation"
          description="You have successfully changed your password. Always keep it safe"
          primaryButtonText="Okay"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </>
  );
};

export default SecuritySettings;
