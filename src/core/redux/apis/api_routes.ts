// Base URL
const baseURL = "https://flezta-api-dev.onrender.com";

// Auths
const loginAPIRoute = "/auth/login";
const registerAPIRoute = `/users`;
const googleLoginAPIRoute = `/auth/google_login`;


// Users
const getUserApi = '/users/me';
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

    // Users
    getUserApi,
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