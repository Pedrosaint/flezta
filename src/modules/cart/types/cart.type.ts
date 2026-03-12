import { StaticImageData } from "next/image";

interface ICartItem {
  id: number;
  name: string;
  type: string;
  badge: string;
  status: "In-stock" | "Out of stock";
  price: number;
  negotiatedPrice: number | null;
  quantity: number;
  image: string | StaticImageData;
  isStrikethrough?: boolean;
  originalPrice?: number;
}

export default ICartItem;
