/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { RootState } from "@/core/redux/stores/store";
import {
  cartRoute,
  dashboardRoute,
  loginRoute,
} from "@/core/routes/routeNames";
import { useGetUserQuery } from "@/modules/auth/apis/auth.api";
import { navItems } from "../layout/data/mega_menu.data";

const useWebsiteHeaderHook = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeMegaMenuItem, setActiveMegaMenuItem] = useState<string | null>(
    null,
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length,
  );
  const cartCount = useSelector((state: RootState) =>
    (state.cart?.items || []).reduce((acc, i) => acc + i.quantity, 0),
  );
  const router = useRouter();
  const pathname = usePathname();

  const isAuthenticatedFromRedux = useSelector(
    (state: RootState) => state.authState.isAuthenticated,
  );

  const userDataRaw = secureLocalStorage.getItem("user_data");
  let userData: any = null;
  try {
    userData = userDataRaw
      ? typeof userDataRaw === "string"
        ? JSON.parse(userDataRaw)
        : userDataRaw
      : null;
  } catch {
    userData = userDataRaw;
  }

  const isAuthenticated = isAuthenticatedFromRedux || !!userData;

  const { data: userResponse, isLoading: isUserLoading } = useGetUserQuery(
    undefined,
    {
      skip: !isAuthenticated,
    },
  );

  const apiUser =
    userResponse?.data ||
    ((userResponse as any)?.firstName ? userResponse : null);
  const storedUser =
    userData?.backendUser || (userData?.firstName ? userData : null);
  const firebaseDisplayName =
    userData?.firebaseUser?.displayName || userData?.displayName || "";

  let firstName =
    (apiUser as any)?.firstName || (storedUser as any)?.firstName || "";
  let lastName =
    (apiUser as any)?.lastName || (storedUser as any)?.lastName || "";

  if (!firstName && !lastName && firebaseDisplayName) {
    const parts = firebaseDisplayName.split(" ");
    firstName = parts[0] || "";
    lastName = parts.slice(1).join(" ") || "";
  }

  let userFullName = "User";
  if (isUserLoading && isAuthenticated) {
    userFullName = "Loading...";
  } else if (firstName || lastName) {
    userFullName = `${firstName} ${lastName}`.trim();
  } else if (firebaseDisplayName) {
    userFullName = firebaseDisplayName;
  }

  const isDashboard = pathname?.startsWith("/buyer_portal");

  const handleUserIconClick = () => {
    if (isAuthenticated) {
      router.push(dashboardRoute);
    } else {
      if (pathname && !pathname.startsWith("/auths")) {
        secureLocalStorage.setItem("return_url", pathname);
      }
      router.push(loginRoute);
    }
  };

  const handleCartIconClick = () => {
    router.push(cartRoute);
  };

  const activeMenuItem = activeMegaMenuItem
    ? navItems.find((item) => item.id === activeMegaMenuItem)
    : null;

  const activeMenuCategories = activeMenuItem?.categories || [];

  const currentCategory = activeCategory
    ? activeMenuCategories.find((cat) => cat.id === activeCategory)
    : activeMenuCategories[0];

  const activeSubCategories = currentCategory?.subCategories || [];

  const handleNavMouseEnter = (id: string) => {
    setActiveMegaMenuItem(id);
    const item = navItems.find((i) => i.id === id);
    if (item?.categories && item.categories.length > 0) {
      setActiveCategory(item.categories[0].id);
    } else {
      setActiveCategory(null);
    }
  };

  return {
    showMegaMenu,
    setShowMegaMenu,
    wishlistCount,
    router,
    pathname,
    navItems,
    activeMenuCategories,
    activeSubCategories,
    handleUserIconClick,
    handleCartIconClick,
    isAuthenticated,
    userFullName,
    isDashboard,
    activeMegaMenuItem,
    setActiveMegaMenuItem,
    activeCategory,
    setActiveCategory,
    handleNavMouseEnter,
    cartCount,
  };
};

export default useWebsiteHeaderHook;
