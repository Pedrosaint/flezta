import { aboutRoute, contactRoute, homeRoute, productsRoute } from "./routeNames";

export const navLinks = [
  {
    name: "Home",
    path: homeRoute,
  },
  {
    name: "Products",
    path: productsRoute,
  },
  {
    name: "About Us",
    path: aboutRoute,
  },
  {
    name: "Contact",
    path: contactRoute,
  },
] as const;
