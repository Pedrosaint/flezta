import { Eye, EyeOff } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import LogoImage from "@/assets/images/app_logo.png";
import useLoginHook from "../hooks/login.hook";

const LoginComp = () => {
  const navigate = useNavigate();

  // Call all required hooks here
  const {
    email, setEmail, password, setPassword,
    showPassword, setShowPassword,
    handleSubmitLoginForm, isLoading 
  } = useLoginHook();

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
            Welcome Back! To continue
          </p>
          <h2 className="text-3xl font-black text-primary-color">
            Login to your account
          </h2>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 pl-3">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right -mt-4">
            <button
              onClick={() => navigate("/auths/forgot_password")}
              type="button"
              className="text-sm text-secondary-color font-semibold cursor-pointer"
            >
              I forgot my password
            </button>
          </div>

          <button
            onClick={handleSubmitLoginForm}
            disabled={isLoading}
            className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <div className="w-full bg-primary-color text-white py-4 rounded-[14px] font-semibold">
              Login
            </div>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or Login With</span>
            </div>
          </div>

          <button
            onClick={() => handleSubmitLoginForm()}
            disabled={isLoading}
            className="w-full bg-[#F9FAFB] border border-[#DDE0E5] py-4 rounded-[18px] font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <FcGoogle size={20} />
            Google
          </button>

          <p className="text-center text-sm text-primary-color">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/auths/create_account")}
              type="button"
              className="text-secondary-color font-semibold cursor-pointer"
            >
              { isLoading ? "Please wait..." : "Register New Account" }
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
