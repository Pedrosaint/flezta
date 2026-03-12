'use client';

import { SuccessModal } from '@/shared/ui/components/modal.ui';
import { useRouter } from 'next/navigation';
import { loginRoute } from '@/core/routes/routeNames';

const ResetPasswordModal = () => {
  const router = useRouter();

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    router.push(loginRoute);
  };

  return (
    <SuccessModal
      isOpen
      onClose={handleClose}
      title="Congratulations"
      description="You have successfully reset your password. Please proceed to login"
      primaryButtonText="Proceed"
    />
  );
};

export default ResetPasswordModal;
