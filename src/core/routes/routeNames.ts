
// Auth
const authRoute = "/auths";
const loginRoute = "/auths/login";
const forgotPasswordRoute = "/auths/forgot_password";
const verifyOtpRoute = "/auths/verify_otp";
const resetPasswordRoute = "/auths/reset_password";
const createAccountRoute = "/auths/create_account";

// Seller Auth
const sellerAuthRoute = "/seller_auths";
const sellerIdentityVerificationRoute = "/seller_auths/identity_verification";
const sellerStoreSetupRoute = "/seller_auths/store_setup";
const sellerAccountSetupRoute = "/seller_auths/account_setup";
const sellerVerifyRoute = "/seller_auths/verify";


// App
const appRoute = "/";
const homeRoute = "/home";
const productsRoute = "/products";
const productDetailsRoute = "/products/details/:id";
const cartRoute = "/cart";
const checkoutRoute = "/checkout";
const paymentRoute = "/payment";
const aboutRoute = "/about";
const contactRoute = "/contact";

// Dashboard
const dashboardRoute = "/buyer_portal/dashboard";
const profileRoute = "/buyer_portal/profile";
const chatRoute = "/buyer_portal/chat";
const orderHistoryRoute = "/buyer_portal/order_history";
const orderDetailsRoute = "/buyer_portal/order_history/:id";
const walletRoute = "/buyer_portal/wallet";
const wishlistRoute = "/buyer_portal/wishlist";
const settingsRoute = "/buyer_portal/settings";


export {
  //auth
  authRoute,
  loginRoute,
  forgotPasswordRoute,
  verifyOtpRoute,
  resetPasswordRoute,
  createAccountRoute,

  // Seller Auth
  sellerAuthRoute,
  sellerIdentityVerificationRoute,
  sellerStoreSetupRoute,
  sellerAccountSetupRoute,
  sellerVerifyRoute,


  // App
  appRoute,
  homeRoute,
  contactRoute,
  aboutRoute,
  productsRoute,
  cartRoute,
  checkoutRoute,
  productDetailsRoute,
  paymentRoute,


  // Dashboard
  dashboardRoute,
  profileRoute,
  chatRoute,
  orderHistoryRoute,
  orderDetailsRoute,
  walletRoute,
  wishlistRoute,
  settingsRoute,
};
