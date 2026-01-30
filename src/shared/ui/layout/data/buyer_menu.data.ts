import {
    ChatIcon,
    Love,
    OrderIcon,
    SettingsIcon,
    UserIcon,
    WalletIcon,
} from "@/assets/svg/svg_icon";
import { chatRoute, dashboardRoute, orderHistoryRoute, profileRoute, settingsRoute, walletRoute, wishlistRoute } from "@/core/routes/routeNames";
import { LayoutDashboard } from "lucide-react";

const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: dashboardRoute },
    { label: "Profile", icon: UserIcon, path: profileRoute },
    { label: "Chat", icon: ChatIcon, path: chatRoute },
    { label: "Order History", icon: OrderIcon, path: orderHistoryRoute },
    { label: "Wallet", icon: WalletIcon, path: walletRoute },
    { label: "Wishlist", icon: Love, path: wishlistRoute },
    { label: "Settings", icon: SettingsIcon, path: settingsRoute },
];

export default menuItems;