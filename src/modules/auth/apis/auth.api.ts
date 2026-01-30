import {
  getUserApi,
  loginAPIRoute,
  registerAPIRoute,
} from "../../../core/redux/apis/api_routes";
import rootAPI from "../../../core/redux/apis/services/api.service";
import type { LoginValidationType } from "../../../shared/utils/validations/auth.validation";
import type { ICreateAccountResponse } from "../types/create_account_response.type";
import type IUser from "../types/login_response.type";


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
      Omit<LoginValidationType, "password">
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

    // Get user API
    getUser: builder.query<ICreateAccountResponse, void>({
      query: () => ({
        url: getUserApi,
        method: "GET",
      }),
      providesTags: ["User"],
      transformResponse: (response: { data: ICreateAccountResponse }) => {
        return response.data;
      },
    }),



  }),
});

export const {
  useLoginMutation,
  useCreateAccountMutation,
  useGetUserQuery,
  useLazyGetUserQuery,
} = authAPI;

export default authAPI;
