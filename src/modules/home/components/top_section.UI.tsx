/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";

interface ITopSectionUIProps {
  fIndex: number;
  eIndex: number;
  slides: Array<{ text: string; img: string }>;
  getTextVariant: () => any;
  getImageVariant: () => any;
  onDotClick: (index: number) => void;
  onElectronicDotClick: (index: number) => void;
  ElectonicsImage: string;
}

 const TopSectionUI = ({
  fIndex,
  eIndex,
  slides,
  getTextVariant,
  getImageVariant,
  onDotClick,
  onElectronicDotClick,
  ElectonicsImage,
}: ITopSectionUIProps) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* =============================== */}
          {/* FURNITURE SECTION */}
          {/* =============================== */}
          <div className="bg-[#E8EEEE] rounded-4xl p-8 relative overflow-hidden min-h-[430px] w-4/5">
            {/* TEXT */}
            <div className="relative z-20 max-w-md text-primary-color">
              <h2 className="text-5xl font-bold mb-4 leading-tight">
                Top Furniture Collection
              </h2>

              <div className="overflow-hidden h-[55px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={fIndex + "-text"}
                    variants={getTextVariant()}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <p className="text-lg font-medium mb-6">
                      {slides[fIndex].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button className="w-[170px] p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] cursor-pointer mt-2">
                <div className="w-full bg-primary-color text-white py-4 rounded-[14px] text-center font-semibold">
                  Shop Now
                </div>
              </button>
            </div>

            {/*==== IMAGE ====*/}
            <AnimatePresence mode="wait">
              <motion.img
                key={fIndex + "-img"}
                src={slides[fIndex].img}
                alt=""
                className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain z-10"
                variants={getImageVariant()}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/*==== DOTS ====*/}
            <div className="absolute bottom-5 left-105 flex items-center gap-4">
              {[0, 1, 2].map((dot) => (
                <button key={dot} onClick={() => onDotClick(dot)}>
                  {fIndex === dot ? (
                    <div className="w-6 h-6 rounded-full border-2 border-bg-primary-color flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient"></div>
                    </div>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-primary-color"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* =============================== */}
          {/* ELECTRONICS SECTION */}
          {/* =============================== */}
          <div className="bg-[#FAF2E9] rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex items-center w-2/5">
            <div className="relative z-10 max-w-md self-start">
              <h2 className="text-5xl font-bold text-primary-color mb-6">
                Best Electronic Deals
              </h2>

              <button className="w-[170px] p-0.5 border backdrop-blur-[10px] border-[#e26e00] rounded-[18px] transition cursor-pointer">
                <div className="w-full bg-gradient text-white py-4 rounded-[14px] font-semibold text-center">
                  Shop Now
                </div>
              </button>
            </div>

            {/* ELECTRONICS DOTS */}
            <div className="absolute bottom-10 flex items-center gap-4">
              {[0, 1, 2].map((dot) => (
                <button key={dot} onClick={() => onElectronicDotClick(dot)}>
                  {eIndex === dot ? (
                    <div className="w-6 h-6 rounded-full border-2 border-bg-primary-color flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient"></div>
                    </div>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-primary-color"></div>
                  )}
                </button>
              ))}
            </div>

            {/* ELECTRONICS IMAGE */}
            <motion.img
              key={eIndex + "-electronic-img"}
              src={ElectonicsImage}
              alt=""
              className="absolute right-9 bottom-10 h-[244px] w-[220px]"
              animate={{ x: [40, 0], opacity: [0.6, 1] }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default TopSectionUI;