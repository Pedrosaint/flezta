import { Plus } from "lucide-react";


const AddBundleComp = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="border-2 border-dashed bg-[#FFFFFF] border-gray-300 rounded-3xl p-6">
        <div className="flex items-center justify-between gap-6">
          {/* Left side - Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is bundle?
            </h2>
            <p className="text-gray-700 leading-relaxed w-full max-w-5xl">
              Headrest, Height and Angle adjustable: Multi position headrest
              height adjustable with angle tilt feature for optimum head to neck
              support. Adjustable Lumbar Support: Height adjustable Lumbar
              support system to provide adequate lower back support Single Angle
              Locking knee tilt Mechanism.
            </p>
          </div>

          {/* Right side - Button */}
          <button className="w-70 p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-2xl cursor-pointer">
            <div className="flex items-center justify-center gap-2 w-full bg-primary-color text-white py-4 rounded-[14px] text-center">
              <Plus className="w-5 h-5" />
              Add Bundle
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBundleComp;
