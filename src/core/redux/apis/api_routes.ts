// Base URL
const baseURL = "https://api.example.com";

// Auths
const loginAPIRoute = "/auth/login";
const registerAPIRoute = `/auth/register`;
const googleLoginAPIRoute = `/auth/google_login`;
const forgotPasswordAPIRoute = `/auth/forgot_password`;
const resetPasswordAPIRoute = `/auth/reset_password`;
const verifyOtpAPIRoute = `/auth/verify_otp`;

// Users
const getUserProfileAPIRoute = `/users/profile`;
const updateUserProfileAPIRoute = `/users/update_profile`;

export {
    // Base URL
    baseURL,

    // Auths
    loginAPIRoute,
    googleLoginAPIRoute,
    registerAPIRoute,
    forgotPasswordAPIRoute,
    resetPasswordAPIRoute,
    verifyOtpAPIRoute,

    // Users
    getUserProfileAPIRoute,
    updateUserProfileAPIRoute,
};