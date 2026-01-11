import { CustomerSupportIcon, FastShippingIcon, PriceIcon, SecurePaymentIcon } from "../../../assets/svg/svg_icon";

const features = [
  {
    title: "Fast shipping",
    text: "Fast and reliable shipping on all your orders",
    icon: FastShippingIcon,
  },
  {
    title: "100% secure payment",
    text: "We ensure your money is secure & safe.",
    icon: SecurePaymentIcon,
  },
  {
    title: "24/7 customer support",
    text: "We provide instant around-the-clock support",
    icon: CustomerSupportIcon,
  },
  {
    title: "Price negotiation",
    text: "Fast and reliable shipping on all your orders",
    icon: PriceIcon,
  },
];

const TrustComp = () => {
  return (
    <div className="w-full py-10  bg-[#F9FAFB] flex justify-center">
      <div className="container mx-auto mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group border border-[#DDE0E5] hover:bg-[#003625] p-4 rounded-3xl flex items-center gap-3 transition-colors duration-300 cursor-grab"
            >
              <span className="bg-secondary-color border border-[#A4FBE0] rounded-xl p-2 flex items-start self-start justify-center transition-colors duration-300 group-hover:bg-white">
                <item.icon width={28} height={28} />
              </span>

              <div>
                <h4 className="font-semibold group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-[#003625] group-hover:text-white transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustComp;
