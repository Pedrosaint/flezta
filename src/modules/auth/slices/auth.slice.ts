import { createSlice, type PayloadAction } from "@reduxjs/toolkit/react";
import type { IAuthState } from "../types/auth_state.type";
import type { IUser } from "../types/login_response.type";

const initialState: IAuthState = {
    user: null,
    isAuthenticated: false,
};
const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUser: (state: IAuthState, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        setIsAuthenticated: (state: IAuthState, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },

        clearCredentials: (state: IAuthState) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    }
});

const { actions, reducer } = authSlice;

export const {
    setUser,
    setIsAuthenticated,
    clearCredentials,
} = actions;
export default reducer;