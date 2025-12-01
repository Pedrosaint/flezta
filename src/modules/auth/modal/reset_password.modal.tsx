import { useNavigate } from "react-router-dom";
import { GoodIcon } from "../../../assets/svg/svg_icon";


const ResetPasswordModal = () => {
    const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className=" p-2 border backdrop-blur-[10px] border-[#003625] rounded-3xl bg-transparent">
        <div className="bg-[#DDFFF4] rounded-2xl p-8 max-w-sm w-full text-center">
          <div className="flex justify-center mb-6">
            <GoodIcon width={50} height={50} />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Congratulations
          </h3>
          <p className="text-gray-700 mb-8">
            You have successfully reset your password. Please proceed to login
          </p>

          <button
            onClick={() => navigate("/auths/login")}
           className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer">
            <div className="w-full bg-primary-color text-white py-4 rounded-[14px] font-semibold">
              Proceed
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordModal
