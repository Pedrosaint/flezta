import { useState, useMemo, useCallback } from "react";
import ICartItem from "../types/cart.type";
import cartItemsData from "../data/cartItems.data";
import { useRouter } from "next/navigation";
import { checkoutRoute } from "@/core/routes/routeNames";

const useMyCartHook = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>(cartItemsData);
  const router = useRouter();

  const updateQuantity = useCallback((id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const calculateSubtotal = useCallback(
    (item: ICartItem) => (item.price * item.quantity).toFixed(2),
    []
  );

  const calculateTotal = useCallback(
    () =>
      cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2),
    [cartItems]
  );

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

const handleCheckout = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => {
    router.push(checkoutRoute);
  }, 300);
};



  return {
    cartItems,
    updateQuantity,
    removeItem,
    calculateSubtotal,
    calculateTotal,
    totalItems,
    handleCheckout,
  };
};

export default useMyCartHook;
