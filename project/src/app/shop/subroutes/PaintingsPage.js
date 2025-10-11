"use client";
import React, { useState } from "react";
import { subrouteContent } from "../../data/subrouteContent";
import StarRating from "@/Components/StarRating";

export default function PaintingsPage() {
  const [addedToCart, setAddedToCart] = useState({});
  const paintings = subrouteContent.Paintings;

  const handleAddToCart = (productId) => {
    setAddedToCart((prev) => ({ ...prev, [productId]: true }));
  };

  const addedCount = Object.keys(addedToCart).length;
  return (
    <div style={{ padding: "2rem" }}>
      <h2>{paintings.title}</h2>
      <p>{paintings.description}</p>

      <h3>addedToCart value: {addedCount}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {paintings.products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h4 style={{ margin: "0.5rem 0" }}>{product.name}</h4>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>
              {product.description}
            </p>
            <StarRating rating={product.rating} />
            <p style={{ fontWeight: "bold" }}>{product.price}</p>

            <div>
              {!addedToCart[product.id] ? (
                <button onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </button>
              ) : (
                <button>
                  Go to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
