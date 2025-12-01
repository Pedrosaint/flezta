import { createBrowserRouter } from "react-router-dom";
import CreateAccountComp from "../../modules/auth/components/create_account.comp";
import ForgotPasswordComp from "../../modules/auth/components/forgot_password.comp";
import ResetPasswordComp from "../../modules/auth/components/reset_password.comp";
import VerifyOtpComp from "../../modules/auth/components/verify_otp.comp";
import AuthRootPage from "../../modules/auth/page/auth_root.page";
import LoginComp from "../../modules/auth/components/login.comp";



const AppRouter = createBrowserRouter([
    {
    path: "/auths",
    Component: AuthRootPage,
    children: [
      {
        path: "/auths/login",
        Component: LoginComp,
      },
      {
        path: "/auths/forgot_password",
        Component: ForgotPasswordComp,
      },
      {
        path: "/auths/verify_otp",
        Component: VerifyOtpComp,
      },
      {
        path: "/auths/reset_password",
        Component: ResetPasswordComp,
      },
      {
        path: "/auths/create_account",
        Component: CreateAccountComp,
      },
    ],
  },
]);

export default AppRouter;