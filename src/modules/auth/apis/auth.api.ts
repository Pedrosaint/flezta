import {
  forgotPasswordAPIRoute,
  loginAPIRoute,
  registerAPIRoute,
  resetPasswordAPIRoute,
  verifyOtpAPIRoute,
} from "../../../core/redux/apis/api_routes";
import rootAPI from "../../../core/redux/apis/services/api.service";
import type { LoginValidationType } from "../../../shared/utils/validations/auth.validation";
import type { ICreateAccountResponse } from "../types/create_account_response.type";
import type { IForgotPasswordRequest } from "../types/forgot_password_request.type";
import type { IForgotPasswordResponse } from "../types/forgot_password_response.type";
import type  IUser  from "../types/login_response.type";
import type { IResetPasswordRequest } from "../types/reset_password_request.type";
import type { IResetPasswordResponse } from "../types/reset_password_response.type";
import type { IVerifyOtpRequest } from "../types/verify_otp_request";
import type { IVerifyOtpResponse } from "../types/verify_otp_response";

const authAPI = rootAPI.injectEndpoints({
  overrideExisting: false,

  endpoints: (builder) => ({
    // Login API
    login: builder.mutation<IUser, LoginValidationType>({
      query: (loginData) => ({
        url: loginAPIRoute,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["User"],
      transformResponse: (response: { data: IUser }) => {
        return response.data;
      },
    }),

    // Create account API
    createAccount: builder.mutation<
      ICreateAccountResponse,
      LoginValidationType
    >({
      query: (CreateAccountData) => ({
        url: registerAPIRoute,
        method: "POST",
        body: CreateAccountData,
      }),
      invalidatesTags: ["User"],
      transformResponse: (response: { data: ICreateAccountResponse }) => {
        return response.data;
      },
    }),

    // Forgot password API
    forgotPassword: builder.mutation<
      IForgotPasswordResponse,
      IForgotPasswordRequest
    >({
      query: (forgotPasswordData) => ({
        url: forgotPasswordAPIRoute,
        method: "POST",
        body: forgotPasswordData,
      }),
      invalidatesTags: ["User"],
      transformResponse: (response: { data: IForgotPasswordResponse }) => {
        return response.data;
      },
    }),

    // Verify OTP API
    verifyOtp: builder.mutation<IVerifyOtpResponse, IVerifyOtpRequest>({
      query: (verifyOtpData) => ({
        url: verifyOtpAPIRoute,
        method: "POST",
        body: verifyOtpData,
      }),
      invalidatesTags: ["User"],
      transformResponse: (response: { data: IVerifyOtpResponse }) => {
        return response.data;
      },
    }),

    // Reset password API
    resetPassword: builder.mutation<
      IResetPasswordResponse,
      IResetPasswordRequest
    >({
      query: (resetPasswordData) => ({
        url: resetPasswordAPIRoute,
        method: "POST",
        body: resetPasswordData,
      }),
      invalidatesTags: ["User"],
      transformResponse: (response: { data: IResetPasswordResponse }) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useCreateAccountMutation,
  useResetPasswordMutation,
  useVerifyOtpMutation,
  useForgotPasswordMutation,
} = authAPI;

export default authAPI;
