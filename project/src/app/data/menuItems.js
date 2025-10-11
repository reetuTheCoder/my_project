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
        {
          name: "Vases & Planters",
          description: "Ceramic, glass & wooden designs",
          subroutes: [
            { name: "Indoor", path: "indoor" },
            { name: "Outdoor", path: "outdoor" },
          ],
        },
        {
          name: "Table Decor",
          description: "Candles, coasters, centerpieces",
          subroutes: [
            { name: "Candles", path: "candles" },
            { name: "Coasters", path: "coasters" },
            { name: "Centerpieces", path: "centerpieces" },
          ],
        },
        {
          name: "Lighting",
          description: "Artisan lamps & lanterns",
          subroutes: [
            { name: "Lamps", path: "lamps" },
            { name: "Lanterns", path: "lanterns" },
            { name: "Fairy Lights", path: "fairy-lights" },
          ],
        },
      ],
      note: "Every item is handmade with love to bring a personal touch to your home.",
    },
  },
];