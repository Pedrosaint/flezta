"use client";

const CreateAccountSuccessModal = ({ show }: { show: boolean }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className=" p-2 border border-[#003625] rounded-3xl bg-transparent">
        <div className="bg-[#DDFFF4] rounded-2xl p-6 max-w-sm w-full text-center">
          <p className="text-[#077D58]">Account Created Successfully</p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountSuccessModal;

