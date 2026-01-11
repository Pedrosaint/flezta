import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IWishlistState {
  items: string[];
}

const initialState: IWishlistState = { items: [] };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((item) => item !== id);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const { toggleItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
