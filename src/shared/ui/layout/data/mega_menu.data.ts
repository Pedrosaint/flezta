import { CameraIcon, GameIcon, HairIcon, HeadphoneIcon, LaptopIcon, TVIcon } from "@/assets/svg/svg_icon";


// Mapping of mega menu categories to their respective icons
export const megaMenuIcons: Record<string, React.ElementType> = {
  "Cell phones & Communication": GameIcon,
  "Computers & Accessories": LaptopIcon,
  "Video games & consoles": GameIcon,
  "Audio and headphones": HeadphoneIcon,
  "Cameras & Accessories": CameraIcon,
  "Tablets & e-readers": GameIcon,
  "TV & home theatre": TVIcon,
  "Beauty & personal care": HairIcon,
};


// Mega menu content data structure
const megaMenuContent: Record<string, { col1: string[]; col2: string[] }> = {
  "Cell phones & Communication": {
    col1: ["All", "Smartphones", "Feature phones", "Accessories"],
    col2: ["Chargers", "Screen protectors", "Phone cases"],
  },

  "Computers & Accessories": {
    col1: [
      "All",
      "Desktop",
      "Laptop & accessories",
      "Keyboard accessories",
      "Computer speakers",
      "Webcams",
      "Printers & accessories",
    ],
    col2: [
      "Mouse pads",
      "Computer accessories",
      "Scanners",
      "Networking devices",
    ],
  },

  "Video games & consoles": {
    col1: ["PlayStation", "Xbox", "Nintendo"],
    col2: ["Controllers", "Game discs", "VR accessories"],
  },

  "Audio and headphones": {
    col1: ["Headphones", "Earbuds", "Speakers"],
    col2: ["Bluetooth audio", "Studio audio"],
  },

  "Cameras & Accessories": {
    col1: ["Cameras", "Lenses", "Tripods"],
    col2: ["Memory cards", "Camera bags"],
  },

  "Tablets & e-readers": {
    col1: ["Tablets", "E-readers"],
    col2: ["Covers", "Stylus pens"],
  },

  "TV & home theatre": {
    col1: ["Smart TVs", "LED TVs"],
    col2: ["Home theatre systems", "Wall mounts"],
  },

  "Beauty & personal care": {
    col1: ["Makeup", "Skincare"],
    col2: ["Hair care", "Fragrances"],
  },
};

export default megaMenuContent;
