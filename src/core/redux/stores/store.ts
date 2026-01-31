/* eslint-disable no-irregular-whitespace */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../../modules/auth/slices/auth.slice";
import wishlistReducer from "../../../shared/slice/whishList.slice";
import cartReducer from "../../../shared/slice/addToCart.slice";
import api from "../apis/services/api.service";

const store = configureStore({
  reducer: {
    authState: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,

    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([api.middleware]),
});

// Infer the ⁠ RootState ⁠ and ⁠ AppDispatch ⁠ types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
