 "use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { HomeIcon } from "@/assets/svg/svg_icon";
import ProductImage from "@/assets/images/product_header.png";
import Image from "next/image";
import Link from "next/link";

/**
 * PortalHeader Component
 * 
 * A dynamic header and breadcrumb system for the buyer portal.
 * Automatically generates the page title and breadcrumb path based on the current URL.
 * 
 * Visuals:
 * - Centered layout matching the requirement.
 * - Deep green overlay (#04241A) with 90% opacity.
 * - Dynamic breadcrumbs with gradient text for inactive links.
 * - Home icon with built-in orange/gold gradient.
 */


const PortalHeader = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Parse path segments and filter out empty strings
    const pathSegments = pathname.split("/").filter(Boolean);

    // We identify segments after 'buyer_portal' for display purposes
    // We identify segments after 'buyer_portal' for display purposes
    const portalIndex = pathSegments.indexOf("buyer_portal");
    const displaySegments = portalIndex !== -1 ? pathSegments.slice(portalIndex + 1) : pathSegments;

    // Special handling for Order Details
    const isOrderDetails = pathname.includes("/order_history/") && displaySegments.some(s => s === "order_history");

    const section = searchParams.get("section");
    const settingsLabel =
        section === "security"
            ? "Security settings"
            : section === "notification"
                ? "Notification settings"
                : "Security Settings";

    // Derive page title
    let pageTitle = "Dashboard";
    if (isOrderDetails) {
        pageTitle = "Order History";
    } else {
        const lastSegment = displaySegments[displaySegments.length - 1];
        if (lastSegment === "settings") {
            // Always keep the main title as "Settings" for the settings page
            pageTitle = "Settings";
        } else {
            pageTitle = lastSegment
                ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1).replace(/[-_]/g, " ")
                : "Dashboard";
        }
    }

    return (
        <div className="relative h-60 md:h-55 w-full overflow-hidden flex flex-col justify-center">
            {/* Background Image */}
            <Image
                src={ProductImage}
                alt="Portal header background"
                fill
                className="absolute inset-0 w-full h-full object-cover object-top"
                priority
            />

            {/* Overlay - Dark Green Premium feel */}
            <div className="absolute inset-0 bg-[#04241A]/90" />

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Page Title - High emphasis */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">
                    {pageTitle}
                </h1>

                {/* Dynamic Breadcrumb System */}
                <div className="flex items-center gap-2 text-sm flex-wrap text-white">
                    <Link
                        href="/buyer_portal/dashboard"
                        className="transition-all hover:scale-110 active:scale-95 flex items-center"
                        title="Go to Dashboard"
                    >
                        <HomeIcon width={20} height={20} />
                    </Link>

                    <ChevronRight className="w-4 h-4 text-gray-400" />

                    {isOrderDetails ? (
                        <div className="flex items-center gap-2">
                            <Link
                                href="/buyer_portal/order_history"
                                className="gradient-text hover:text-white transition-colors duration-200"
                            >
                                Order History
                            </Link>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            <span className="text-white font-medium">
                                Order Details
                            </span>
                        </div>
                    ) : displaySegments.length > 0 ? (
                        displaySegments.map((segment, index) => {
                            // Construct the href for this breadcrumb
                            const actualSegmentIndex = pathSegments.indexOf(segment);
                            const href = "/" + pathSegments.slice(0, actualSegmentIndex + 1).join("/");

                            let label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/[-_]/g, " ");
                            if (segment === "settings") {
                                label = settingsLabel;
                            }
                            const isLast = index === displaySegments.length - 1;

                            return (
                                <div key={index} className="flex items-center gap-2">
                                    {isLast ? (
                                        <span className="text-white font-medium">
                                            {label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={href}
                                            className="gradient-text hover:text-white transition-colors duration-200"
                                        >
                                            {label}
                                        </Link>
                                    )}

                                    {!isLast && (
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <span className="text-white font-medium">Dashboard</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortalHeader;
