"use client";
import React from "react";
import { useParams } from "next/navigation";
import { subrouteContent } from "@/app/data/subrouteContent";
import StarRating from "@/Components/StarRating";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const { productId } = useParams(); // always string
  const { addToCart, addedToCart } = useCart();

  // Convert productId to number if your IDs are numbers
  const pid = isNaN(Number(productId)) ? productId : Number(productId);

  let product;

  // Loop through all subroutes safely
  for (const subroute of Object.values(subrouteContent)) {
    if (!subroute || !subroute.products) continue; // skip invalid subroutes
    const found = subroute.products.find((p) => p.id === pid);
    if (found) {
      product = found;
      break;
    }
  }

  if (!product) return <div>Product not found.</div>;

  const isAdded = !!addedToCart[product.id];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
      />
      <p>{product.description}</p>
      <StarRating rating={product.rating} />
      <p style={{ fontWeight: "bold" }}>{product.price}</p>
      <button
        onClick={() => addToCart(product.id)}
        style={{
          padding: "0.5rem 1rem",
          background: isAdded ? "#4caf50" : "#0070f3",
          color: "#fff",
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
}