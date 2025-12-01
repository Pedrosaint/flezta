import { useState } from "react";
import LogoImage from "@/assets/images/app_logo.png";
import { useNavigate } from "react-router-dom";

const ForgotPasswordComp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  return (
    <div className="w-full overflow-hidden max-w-xl">
      <div className="p-5 md:p-12 flex flex-col justify-center">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <img src={LogoImage} alt="logo" className="w-22 h-22" />
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-primary-color font-medium text-lg mb-2">
            Hey! We learnt that you
          </p>
          <h2 className="text-3xl xl:text-4xl font-black text-primary-color">
            Forgot your password
          </h2>
          <p className="text-primary-color text-[15px] mt-2">
            Enter the email address for this account and we will send you a code
            to reset your password
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 pl-3">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
            />
          </div>

          <button
            onClick={() => navigate("/auths/verify_otp")}
            type="button"
            className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer"
          >
            <div className="w-full bg-primary-color text-white py-4 rounded-[14px] font-semibold">
              Proceed To Get Code
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComp;
