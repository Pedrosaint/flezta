import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "@/shared/slice/whishList.slice";
import { AppDispatch, RootState } from "@/core/redux/stores/store";


 const useWishlist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const toggleWishlist = (id: string) => {
    dispatch(toggleItem(id));
  };

  return { wishlist, toggleWishlist };
};


export default useWishlist;