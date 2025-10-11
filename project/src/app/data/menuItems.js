// app/data/menuItems.js
import React from "react";

export const menuItems = [
  {
    name: "Home",
    path: "/",
    modal: null,
  },
  {
    name: "Shop",
    path: "/shop",
    modal: {
      title: "Shop Handmade Decor",
      imageSrcs: ["/shop-decor1.jpg", "/shop-decor2.jpg", "/shop-decor3.jpg"],
      layout: "image-left",
      description:
        "Explore our curated collection of handcrafted decorative items.",
      categories: [
        {
          name: "Wall Art",
          description: "Paintings, murals, tapestries",
          subroutes: [
            { name: "Paintings", path: "paintings" },
            { name: "Murals", path: "murals" },
            { name: "Tapestries", path: "tapestries" },
          ],
        },

      ],
      note: "Every item is handmade with love to bring a personal touch to your home.",
    },
  },
];
