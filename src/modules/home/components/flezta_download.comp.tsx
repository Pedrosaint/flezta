import PlayStore from "@/assets/images/Playstore.png";
import { AppleIcon } from "../../../assets/svg/svg_icon";

const FleztaDownloadComp = () => {
  return (
    <div className="container mx-auto">
      <div className="rounded-4xl xl:w-340 2xl:w-400 justify-center mt-15 mb-15">
        <div className="w-[95%] thick-background-color text-white p-20 rounded-3xl">
          <h2 className="text-5xl font-bold leading-tight">
            FLEZTA Mobile App
            <br />
            Available for Download
          </h2>
          <p className="text-gray-300 mt-2 text-lg">
            Download our free user friendly app and enjoy hassle free shopping
            like never before
          </p>

          {/* Google Play */}
          <div className="flex gap-4 mt-6">
            <button className="w-[220px] p-0.5 border backdrop-blur-[10px] border-white rounded-[18px] cursor-pointer">
              <div className="w-full bg-white text-primary-color py-4 rounded-[14px] text-center font-semibold">
                <div className="flex items-center justify-center gap-2">
                  <img src={PlayStore.src} alt="Google Play" className="h-10" />
                  <div className="flex flex-col items-start leading-tight">
                    <h1 className="text-[12px] font-normal text-gray-700">
                      GET IT ON
                    </h1>
                    <p className="text-[16px] font-semibold">Google Play</p>
                  </div>
                </div>
              </div>
            </button>

            {/* App Store */}
            <button className="w-[220px] p-0.5 border backdrop-blur-[10px] border-white rounded-[18px] cursor-pointer">
              <div className="w-full bg-white text-primary-color py-4 rounded-[14px] text-center font-semibold">
                <div className="flex items-center justify-center gap-2">
                  <AppleIcon />

                  <div className="flex flex-col items-start leading-tight">
                    <h1 className="text-[12px] font-normal text-gray-700">
                      Download on the
                    </h1>
                    <p className="text-[16px] font-semibold">App Store</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleztaDownloadComp;
