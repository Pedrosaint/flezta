'use client';

import LogoImage from "@/assets/images/website_logo.png";
import PayoneerLogo from "@/assets/images/payoneer.png";
import PaypalLogo from "@/assets/images/paypal.png";
import VisaLogo from "@/assets/images/visa.png";
import MastercardLogo from "@/assets/images/master.png";
import { CgFacebook } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { ArrowUpIcon } from "../../../assets/svg/svg_icon";

const WebsiteFooterComponent = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const informationLinks = [
    "About Us",
    "Privacy Policy",
    "Terms & Condition",
    "Return Policy",
    "Become a Seller",
  ];

  const quickLinks = ["About Us", "Products", "Contact Us", "Help Center"];

  const accountLinks = [
    "My Account",
    "Shopping Cart",
    "Wishlist",
    "Order History",
  ];

  return (
    <footer className="thick-background-color text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12">
          {/* Column 1 - Logo + Text + Social */}
          <div className="w-full md:max-w-md xl:max-w-lg 2xl:max-w-xl">
            <img src={LogoImage.src} alt="logo" className="w-20 h-20" />

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur. Auctor tincidunt massa
              amet eras donec. Eget tempus felis faucibus urna. Nunc gravida.
            </p>

            <div className="flex items-center gap-3">
              <button className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10">
                <CgFacebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10">
                <FaLinkedinIn className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10">
                <BsTwitterX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2 - Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information Links</h3>
            <ul className="space-y-3">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="self-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Account */}
          <div className="self-start">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-3">
              {accountLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex items-center justify-between">
          {/*==== Payment Methods ====*/}
          <div className="flex items-center gap-3">
            <div className="bg-white/40 rounded px-3 py-2 flex items-center justify-center">
              <img src={PayoneerLogo.src} alt="logo" className="w-full h-full" />
            </div>
            <div className="bg-white/40 backdrop-blur-md rounded px-3 py-2 flex items-center justify-center">
              <img src={PaypalLogo.src} alt="logo" className="w-full h-full" />
            </div>
            <div className="bg-white/40 rounded px-3 py-2 flex items-center justify-center">
              <img src={VisaLogo.src} alt="logo" className="w-full h-full" />
            </div>
            <div className="bg-white/40 rounded px-3 py-2 flex items-center justify-center">
              <img src={MastercardLogo.src} alt="logo" className="w-full h-6" />
            </div>
          </div>

          <p className="text-sm text-gray-300">
            Copyright ©{" "}
            <span className="gradient-text font-semibold">FLEZTA</span>{" "}
            {new Date().getFullYear()}. All Right Reserved
          </p>

          {/*==== Scroll to Top Button ====*/}
          <button
            onClick={scrollToTop}
            className="p-0.5 border backdrop-blur-[10px] border-[#E26E00] rounded-[18px] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <div className="w-full px-3 bg-tertiary-color text-white py-3 rounded-[14px] font-semibold">
              <ArrowUpIcon />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooterComponent;
