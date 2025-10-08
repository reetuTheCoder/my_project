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
        { name: "Wall Art", description: "Paintings, murals, tapestries" },
        {
          name: "Vases & Planters",
          description: "Ceramic, glass & wooden designs",
        },
        {
          name: "Table Decor",
          description: "Candles, coasters, centerpieces",
        },
        { name: "Lighting", description: "Artisan lamps & lanterns" },
      ],
      note: "Every item is handmade with love to bring a personal touch to your home.",
    },
  },
  {
    name: "Categories",
    path: "/categories",
    modal: {
      title: "Browse Categories",
      imageSrc: "/categories.jpg",
      layout: "image-right",
      description: "Discover all our handmade decorative product categories.",
      categories: [
        { name: "Wall Art", description: "Paintings, murals, tapestries" },
        {
          name: "Vases & Planters",
          description: "Ceramic, glass & wooden designs",
        },
        {
          name: "Table Decor",
          description: "Candles, coasters, centerpieces",
        },
        { name: "Lighting", description: "Lamps, lanterns & fairy lights" },
        { name: "Textiles", description: "Cushions, throws, rugs" },
        { name: "Seasonal Decor", description: "Festive handmade items" },
      ],
      note: "Click a category to explore unique handcrafted items for your home.",
    },
  },
  {
    name: "Products",
    path: "/products",
    modal: {
      title: "Featured Products",
      imageSrc: "/products.jpg",
      layout: "image-left",
      description:
        "Check out our best-selling and featured handmade decorative products.",
      categories: [
        { name: "Wall Art", description: "Hand-painted murals & paintings" },
        { name: "Vases & Planters", description: "Ceramic and wooden vases" },
        {
          name: "Table Decor",
          description: "Candles, coasters, and centerpieces",
        },
        { name: "Lighting", description: "Artisan lamps & lanterns" },
        { name: "Textiles", description: "Cushions, throws & rugs" },
      ],
      note: "Each piece is unique, handcrafted with care, and perfect for gifting or decorating.",
    },
  },
  {
    name: "Top Deals",
    path: "/deals",
    modal: {
      title: "Limited-Time Offers",
      imageSrc: "/deals.jpg",
      layout: "image-right",
      description:
        "Don’t miss our exclusive limited-time offers on handmade decor.",
      categories: [
        { name: "Wall Art", description: "Discounted paintings & murals" },
        {
          name: "Vases & Planters",
          description: "Special offers on vases & planters",
        },
        {
          name: "Table Decor",
          description: "Seasonal handmade items at reduced prices",
        },
      ],
      note: "Shop now to bring unique handmade pieces into your home before these deals end!",
    },
  },
];
