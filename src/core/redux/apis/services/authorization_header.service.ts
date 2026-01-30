// import secureLocalStorage from "react-secure-storage";

// /**
//  * To get the Firebase token or the refreshed token and return the headers.
//  * @param headers 
//  * @returns headers - Authorization headers
//  */
// const AuthorizationHeaderService = async (headers: Headers) => {

//     try {
//         //  Get Agent Token from the Session Storage.
//         const token = secureLocalStorage.getItem("token");
//         // console.log("ACCESS TOKEN:::", token);

//         if (token) {
//             // Add token to headers
//             headers.set("Authorization", `Bearer ${token}`);
//             headers.set("Accept", "application/json");
//             headers.set("Content-Type", "application/json");
//         } else {
//             headers.set("Accept", "application/json");
//             headers.set("Content-Type", "application/json");
//         };
//     } catch (error) {
//         console.error("Error::: ", error);
//     };

//     return headers;
// };

// export default AuthorizationHeaderService;



// authorization_header.service.ts
import secureLocalStorage from "react-secure-storage";

/**
 * To get the Firebase token or the refreshed token and return the headers.
 * @param headers 
 * @returns headers - Authorization headers
 */
const AuthorizationHeaderService = async (headers: Headers) => {
    try {
        const token = secureLocalStorage.getItem("access_token");
        console.log("ACCESS TOKEN FROM STORAGE:::", token);

        if (token) {
            // Add token to headers
            headers.set("Authorization", `Bearer ${token}`);
        }

        // Always set these headers
        headers.set("Accept", "application/json");
        headers.set("Content-Type", "application/json");

    } catch (error) {
        console.error("Error setting authorization headers::: ", error);
    };

    return headers;
};

export default AuthorizationHeaderService;