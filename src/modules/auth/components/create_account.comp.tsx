'use client';

import { Eye, EyeOff } from "lucide-react";
import LogoImage from "@/assets/images/app_logo.png";
import { FcGoogle } from "react-icons/fc";
import useCreateAccountHook from "../hooks/creatAccount.hook";
import { useRouter } from "next/navigation";
import { loginRoute } from "../../../core/routes/routeNames";
import CreateAccountSuccessModal from "../modal/create_account.modal";

const CreateAccountComp = () => {
  const router = useRouter();

  //==== Call all required hooks here ====//
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleSubmitCreateAccountForm,
    handleGoogleLogin,
    isLoading,
    errors,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    showSuccessModal,
    isGoogleLoading,
  } = useCreateAccountHook();

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="w-full overflow-hidden max-w-xl">
      <div className="p-5 md:p-12 flex flex-col justify-center">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <img src={LogoImage.src} alt="logo" className="w-22 h-22" />
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-primary-color font-medium text-lg mb-2">
            Hello there! Let help you
          </p>
          <h2 className="text-3xl font-black text-primary-color">
            Create a New Account
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 pl-3">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm pl-3 mt-1">
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 pl-3">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
            />

            {errors.lastName && (
              <p className="text-red-500 text-sm pl-3 mt-1">
                {errors.lastName}
              </p>
            )}
          </div>
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

            {errors.email && (
              <p className="text-red-500 text-sm pl-3 mt-1">{errors.email}</p>
            )}
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

            {errors.password && (
              <p className="text-red-500 text-sm pl-3 mt-1">
                {errors.password}
              </p>
            )}
          </div>
   
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 pl-3">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+2348123456789"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm pl-3 mt-1">
                {errors.phoneNumber}
              </p>
            )}
          </div>
        </div>

        <button 
          onClick={handleSubmitCreateAccountForm}
          disabled={isLoading}
          className="group w-full p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mb-5 mt-5">
          <div className="w-full bg-[#003625] text-white py-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
          {isLoading ? "Please wait..." : "Create Account"}
          </div>
        </button>

        <div className="relative mb-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or Login With</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={isGoogleLoading}
          className="w-full bg-[#F9FAFB] border border-[#DDE0E5] py-4 rounded-[18px] font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed duration-200 ease-out
        transform hover:scale-[1.02]"
        >
          <FcGoogle size={20} />
          {isGoogleLoading ? "Please wait..." : "Google"}
        </button>

        <p className="text-center text-sm text-primary-color pt-3">
          Already have an account?{" "}
          <button
            onClick={() => {
              scrollToTopSmooth();
              router.push(loginRoute);
            }}
            type="button"
            className="text-secondary-color font-semibold cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>

      {showSuccessModal && (
        <CreateAccountSuccessModal show={showSuccessModal} />
      )}
    </div>
  );
}

export default CreateAccountComp
