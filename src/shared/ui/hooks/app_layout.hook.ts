"use client";

import secureLocalStorage from "react-secure-storage";
import  { IUser } from "../../../modules/auth/types/create_account_response.type";
import { useRouter } from "next/navigation";
import { loginRoute } from "../../../core/routes/routeNames";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../../../modules/auth/slices/auth.slice";

const useAppLayoutHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle protected routes
  const handleProtectedRoutes = () => {
    // Check if the user is authenticated

    const userData = secureLocalStorage.getItem("user_data") as IUser;

    if (!userData || userData.uid === "") {
      // Redirect to login page
      scrollToTopSmooth();
      router.push(loginRoute);
    } else {
      // Dispatch isAuthenticated to true
      dispatch(setIsAuthenticated(true));

      // Render the protected route
      // scrollToTopSmooth();
      // router.push(dashboardRoute);
    }
  };

  return {
    handleProtectedRoutes,
  };
};

export default useAppLayoutHook;
