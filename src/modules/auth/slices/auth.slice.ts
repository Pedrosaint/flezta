// import { createSlice, type PayloadAction } from "@reduxjs/toolkit/react";
// import type { IAuthState } from "../types/auth_state.type";
// import type { IUser } from "../types/login_response.type";

// const initialState: IAuthState = {
//     user: null,
//     isAuthenticated: false,
// };
// const authSlice = createSlice({
//     name: "authSlice",
//     initialState,
//     reducers: {
//         setUser: (state: IAuthState, action: PayloadAction<IUser>) => {
//             state.user = action.payload;
//         },
//         setIsAuthenticated: (state: IAuthState, action: PayloadAction<boolean>) => {
//             state.isAuthenticated = action.payload;
//         },

//         clearCredentials: (state: IAuthState) => {
//             state.user = null;
//             state.isAuthenticated = false;
//         },
//     }
// });

// const { actions, reducer } = authSlice;

// export const {
//     setUser,
//     setIsAuthenticated,
//     clearCredentials,
// } = actions;
// export default reducer;




import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../types/login_response.type";
import { IAuthState } from "../types/auth_state.type";


const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

    clearCredentials: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setIsAuthenticated, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
