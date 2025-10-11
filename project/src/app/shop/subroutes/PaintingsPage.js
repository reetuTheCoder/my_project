"use client";
import React from "react";
import { subrouteContent } from "../../data/subrouteContent";
import StarRating from "@/Components/StarRating";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function PaintingsPage() {
  const { addToCart, addedToCart } = useCart();
  const paintings = subrouteContent.Paintings;
  const router = useRouter();

  const handleProductClick = (productId) => {
    // Navigate to product detail page dynamically
    router.push(`/shop/product/${productId}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{paintings.title}</h2>
      <p>{paintings.description}</p>

      <h3>addedToCart value: {Object.keys(addedToCart).length}</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {paintings.products.map((product) => {
          const isAdded = !!addedToCart[product.id];
          return (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <StarRating rating={product.rating} />
              <p style={{ fontWeight: "bold" }}>{product.price}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the product click
                  addToCart(product.id);
                }}
                style={{
                  background: isAdded ? "#4caf50" : "#0070f3",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                disabled={isAdded}
              >
                {isAdded ? "Go to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
