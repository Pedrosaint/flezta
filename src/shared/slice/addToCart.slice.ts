import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItem {
  id: string;
  quantity: number;
}

interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ id: string; quantity?: number }>) {
      const { id, quantity = 1 } = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ id, quantity });
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },

    changeQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      const { id, quantity } = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        existing.quantity = quantity;
        if (existing.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, changeQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
