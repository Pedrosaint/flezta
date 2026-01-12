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

// Carts
const addToCartAPIRoute = `/carts/add_to_cart`;
const removeFromCartAPIRoute = `/carts/remove_from_cart`;
const updateCartAPIRoute = `/carts/update_cart`;

// Products
const getProductsAPIRoute = "/products";
const getProductDetailsAPIRoute = "/products/:productId";
const addToWishlistAPIRoute = "/wishlist/add";
const removeFromWishlistAPIRoute = "/wishlist/remove";
const getWishlistItemsAPIRoute = "/wishlist";
const getPreviouslyViewedAPIRoute = "/products/previously-viewed";
const trackProductViewAPIRoute = "/products/track-view";

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

    // Carts
    addToCartAPIRoute,
    removeFromCartAPIRoute,
    updateCartAPIRoute,

    // Products
    getProductsAPIRoute,
    getProductDetailsAPIRoute,
    addToWishlistAPIRoute,
    removeFromWishlistAPIRoute,
    getWishlistItemsAPIRoute,
    getPreviouslyViewedAPIRoute,
    trackProductViewAPIRoute,  
};