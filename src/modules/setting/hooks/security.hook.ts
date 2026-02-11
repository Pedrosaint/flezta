import { useState } from "react";

export interface SecurityFormState {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const useSecuritySettingsHook = () => {
  const [formState, setFormState] = useState<SecurityFormState>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChangePassword = () => {
    // Handle password change logic here
    console.log("Changing password...");
    setShowSuccessModal(true);
  };

  const handleFieldChange = (field: keyof SecurityFormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return {
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
  };
};

