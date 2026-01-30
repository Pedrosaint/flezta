import {
  CustomSVGIconProps,
  CameraIcon,
  GameIcon,
  HairIcon,
  HeadphoneIcon,
  LaptopIcon,
  TVIcon,
} from "@/assets/svg/svg_icon";

// Define types for better type safety
export interface ISubCategory {
  id: string;
  name: string;
  path: string;
}

export interface IMegaMenuCategory {
  id: string;
  name: string;
  path: string;
  icon?: React.ComponentType<CustomSVGIconProps>; // Icon is now optional and can be a string or component
  subCategories?: ISubCategory[];
}

export interface IMegaMenuItem {
  id: string;
  name: string;
  path: string;
  icon?: React.ComponentType<CustomSVGIconProps>;
  categories?: IMegaMenuCategory[];
}

export const navItems: IMegaMenuItem[] = [
  {
    id: "001",
    name: 'Electronics',
    path: '/electronics',
    icon: TVIcon,
    categories: [
      {
        id: "001-1",
        name: 'TVs & Audio',
        path: '/electronics/tvs-audio',
        icon: TVIcon,
        subCategories: [
          { id: "001-1-1", name: 'Televisions', path: '/electronics/tvs-audio/televisions' },
          { id: "001-1-2", name: 'Soundbars', path: '/electronics/tvs-audio/soundbars' },
          { id: "001-1-3", name: 'Home Theater Systems', path: '/electronics/tvs-audio/home-theater-systems' },
        ],
      },
      { id: "001-2", name: 'Cameras', path: '/electronics/cameras', icon: CameraIcon },
      { id: "001-3", name: 'Headphones', path: '/electronics/headphones', icon: HeadphoneIcon },
      { id: "001-4", name: 'Wearables', path: '/electronics/wearables', icon: LaptopIcon },
    ],
  },

  {
    id: "002",
    name: 'Fashion',
    path: '/fashion',
    icon: HairIcon,
    categories: [
      {
        id: "002-1",
        name: "Men's Clothing",
        path: '/fashion/mens-clothing',
        icon: HairIcon,
        subCategories: [
          { id: "002-1-1", name: 'Shirts', path: '/fashion/mens-clothing/shirts' },
          { id: "002-1-2", name: 'Pants', path: '/fashion/mens-clothing/pants' },
          { id: "002-1-3", name: 'Jackets', path: '/fashion/mens-clothing/jackets' },
        ],
      },
      { id: "002-2", name: "Women's Clothing", path: '/fashion/womens-clothing', icon: HairIcon },
      { id: "002-3", name: "Accessories", path: '/fashion/accessories', icon: LaptopIcon },
    ],
  },


  { id: "003", name: 'Phones & Tablets', path: '/phones-tablets', icon: HeadphoneIcon },
  { id: "004", name: 'Laptops', path: '/laptops', icon: LaptopIcon },
  { id: "005", name: 'Appliances', path: '/appliances', icon: GameIcon },
];

export default navItems;
