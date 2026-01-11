import SeatImage from "@/assets/images/office_seat.png";
import ICartItem from "../types/cart.type";

const cartItemsData: ICartItem[] = [
  {
    id: 1,
    name: "Ergonomic Office Chair",
    type: "2 offers",
    badge: "See Items",
    price: 310.0,
    negotiatedPrice: 350.0,
    quantity: 1,
    image: SeatImage,
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    type: "Home & Office",
    badge: "See Item",
    price: 200.0,
    negotiatedPrice: 350.0,
    quantity: 2,
    image: SeatImage,
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    type: "Home & Office",
    badge: "See Item",
    price: 310.0,
    negotiatedPrice: null,
    quantity: 1,
    image: SeatImage,
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    type: "Home & Office",
    badge: "See Item",
    price: 310.0,
    negotiatedPrice: null,
    originalPrice: 350.0,
    quantity: 3,
    image: SeatImage,
    isStrikethrough: true,
  },
];

export default cartItemsData;
