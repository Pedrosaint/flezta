"use client";

import { LogoutIcon } from "@/assets/svg/svg_icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "./data/buyer_menu.data";



const PortalSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[320px] bg-white p-5 border border-[#DDE0E5] rounded-[20px] sticky top-32 h-fit">
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="sidebarIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E26E00" />
            <stop offset="100%" stopColor="#FDA106" />
          </linearGradient>
        </defs>
      </svg>
      <p className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wider">
        Menu Link
      </p>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          // Check if active: either exact match or the pathname starts with this path (for sub-routes)
          // We use startsWith but ensure we don't accidentally match "/" to everything or similar cases
          const isActive = item.path === pathname || (item.path !== "/buyer_portal/dashboard" && pathname.startsWith(item.path));

          return (
            <Link
              key={item.label}
              href={item.path}
              className={`
                group flex items-center gap-3 px-4 py-3 rounded-[14px]
                transition-all duration-300 cursor-pointer
                ${isActive
                  ? "bg-[#FDA106]/20 text-[#003625]"
                  : "text-gray-600 hover:text-[#FDA106]"
                }
              `}
            >
              {/* DOT */}
              <span
                className={`
                  w-2 h-2 rounded-full
                  transition-all duration-300
                  ${isActive
                    ? "bg-[#003625] opacity-100"
                    : "bg-gradient opacity-0 group-hover:opacity-100"
                  }
                `}
              />

              {/* ICON */}
              {Icon && (
                <span
                  className={`
                    transition-transform duration-300
                    ${isActive ? "" : "group-hover:translate-x-2"}
                  `}
                >
                  <Icon
                    height={22}
                    width={22}
                    stroke="inherit"
                    className={`
                      transition-all duration-300
                      ${isActive ? "stroke-[#003625]" : "stroke-current group-hover:stroke-[url(#sidebarIconGradient)]"}
                    `}
                  />
                </span>
              )}

              {/* LABEL */}
              <span
                className={`
                  text-sm font-medium
                  transition-transform duration-300
                  ${isActive ? "" : "group-hover:translate-x-2"}
                `}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* LOGOUT */}
        <div className="group flex items-center gap-3 px-4 py-3 rounded-[14px] cursor-pointer text-gray-600 hover:text-[#FDA106] transition-all duration-300 mt-3">
          {/* DOT */}
          <span
            className="w-2 h-2 rounded-full transition-all duration-300 bg-gradient opacity-0 group-hover:opacity-100"
          />

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            <LogoutIcon
              height={22}
              width={22}
              stroke="inherit"
              className="transition-all duration-300 stroke-current group-hover:stroke-[url(#sidebarIconGradient)]"
            />
          </span>
          <span className="text-sm font-medium transition-transform duration-300 group-hover:translate-x-2">
            Logout
          </span>
        </div>
      </nav>
    </aside>
  );
};

export default PortalSidebar;
