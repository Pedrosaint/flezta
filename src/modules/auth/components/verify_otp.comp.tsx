import { useNavigate } from "react-router-dom";
import LogoImage from "@/assets/images/app_logo.png";
import { useState } from "react";

const VerifyOtpComp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto move to next input
    if (value && index < 6) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 6) return;
    console.log("OTP submitted:", code);
    navigate("/auths/reset_password");
  };

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
            Alright! You can proceed to
          </p>
          <h2 className="text-3xl xl:text-4xl font-black text-primary-color">
            Verify OTP sent
          </h2>
          <p className="text-primary-color text-[15px] mt-2">
            Enter the 6-digit code that was sent to your email at
            myemail@gmail.com
          </p>
        </div>

        {/* === OTP INPUTS === */}
        <div className="flex justify-between mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength={1}
              placeholder="-"
              className=" 
                md:w-16 md:h-16 w-12 h-12 border border-gray-300 rounded-2xl
                text-center text-xl font-bold
                focus:outline-none focus:border-primary-color
              "
            />
          ))}
        </div>

        <div className="space-y-5">
          <button
            onClick={handleVerify}
            type="button"
            className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer"
          >
            <div className="w-full bg-primary-color text-white py-4 rounded-[14px] font-semibold">
              Verify OTP
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpComp;
