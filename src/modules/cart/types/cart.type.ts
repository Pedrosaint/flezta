import { StaticImageData } from "next/image";

interface ICartItem {
  id: number;
  name: string;
  type: string;
  badge: string;
  price: number;
  negotiatedPrice: number | null;
  quantity: number;
  image: string | StaticImageData;
  isStrikethrough?: boolean;
  originalPrice?: number;
}

export default ICartItem;