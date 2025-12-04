import { createBrowserRouter, Navigate } from "react-router-dom";
import CreateAccountComp from "../../modules/auth/components/create_account.comp";
import ForgotPasswordComp from "../../modules/auth/components/forgot_password.comp";
import ResetPasswordComp from "../../modules/auth/components/reset_password.comp";
import VerifyOtpComp from "../../modules/auth/components/verify_otp.comp";
import AuthRootPage from "../../modules/auth/page/auth_root.page";
import LoginComp from "../../modules/auth/components/login.comp";
import { authRoute, createAccountRoute, forgotPasswordRoute, loginRoute, resetPasswordRoute, verifyOtpRoute } from "./routeNames";



const AppRouter = createBrowserRouter([
    {
    path: authRoute,
    Component: AuthRootPage,
    children: [
      {
        index: true,
        element: <Navigate to={loginRoute} />,
      },
      {
        path: loginRoute,
        Component: LoginComp,
      },
      {
        path: forgotPasswordRoute,
        Component: ForgotPasswordComp,
      },
      {
        path: verifyOtpRoute,
        Component: VerifyOtpComp,
      },
      {
        path: resetPasswordRoute,
        Component: ResetPasswordComp,
      },
      {
        path: createAccountRoute,
        Component: CreateAccountComp,
      },
    ],
  },
]);

export default AppRouter;