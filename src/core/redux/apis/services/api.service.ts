// import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { baseURL } from "../api_routes";
// import AuthorizationHeaderService from "./authorization_header.service";


// const rootAPI = createApi({
//     reducerPath: "api",
//     baseQuery: retry(
//         fetchBaseQuery({
//             baseUrl: baseURL,
//             credentials: "include", // ⬅️ VERY IMPORTANT for SECURE HTTPONLY COOKIES
//             mode: "cors",
//             prepareHeaders: async (headers: Headers) => AuthorizationHeaderService(headers)
//         }),
//         {
//             maxRetries: 3,
//         }
//     ),
//     tagTypes: [
//         "User",
//         "Cart",
//         "Products",
//         "Wishlist",
//         "Orders",
//         "PreviouslyViewed",
//     ],
//     endpoints: () => ({}),
// });

// export default rootAPI;





// api.service.ts
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../api_routes";
import AuthorizationHeaderService from "./authorization_header.service";

const rootAPI = createApi({
    reducerPath: "api",
    baseQuery: retry(
        fetchBaseQuery({
            baseUrl: baseURL,
            // REMOVE THIS LINE - you don't need credentials for Bearer tokens
            // credentials: "include", 
            mode: "cors",
            prepareHeaders: async (headers: Headers) => AuthorizationHeaderService(headers)
        }),
        {
            maxRetries: 3,
        }
    ),
    tagTypes: [
        "User",
        "Cart",
        "Products",
        "Wishlist",
        "Orders",
        "PreviouslyViewed",
    ],
    endpoints: () => ({}),
});

export default rootAPI;