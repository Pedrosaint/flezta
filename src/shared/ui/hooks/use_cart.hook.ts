import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  changeQuantity,
  clearCart,
} from "@/shared/slice/addToCart.slice";
import { AppDispatch, RootState } from "@/core/redux/stores/store";

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart?.items || []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (id: string, quantity = 1) => {
    dispatch(addItem({ id, quantity }));
  };

  const removeFromCart = (id: string) => {
    dispatch(removeItem(id));
  };

  const setItemQuantity = (id: string, quantity: number) => {
    dispatch(changeQuantity({ id, quantity }));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  return { cart, cartCount, addToCart, removeFromCart, setItemQuantity, clear };
};

export default useCart;
