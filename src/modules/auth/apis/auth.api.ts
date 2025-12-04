import { loginAPIRoute } from "../../../core/redux/apis/api_routes";
import rootAPI from "../../../core/redux/apis/services/api.service";
import type { LoginValidationType } from "../../../shared/utils/validations/auth.validation";
import type { ILoginResponse } from "../types/login_response.type";

const authAPI = rootAPI.injectEndpoints({
    overrideExisting: false,
    
    endpoints: (builder) => ({
        
        // Login API
        login: builder.mutation<ILoginResponse, LoginValidationType>({
            query: (loginData) => ({
                url: loginAPIRoute,
                method: "POST",
                body: loginData,
            }),
            invalidatesTags: ["User"],
            transformResponse: (response: { data: ILoginResponse }) => {
                return response.data;
            },
        }),
    }),
});

export const {
    useLoginMutation,
} = authAPI;

export default authAPI;