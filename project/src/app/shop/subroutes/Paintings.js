import React from "react";
import { subrouteContent } from "../../data/subrouteContent";

export default function PaintingsList() {
  const paintings = subrouteContent.Paintings;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div style={{ position: "relative", display: "inline-flex" }}>
        {"★".repeat(fullStars)}
        {halfStar && (
          <span style={{ position: "relative", display: "inline-block" }}>
            <span
              style={{ position: "absolute", overflow: "hidden", width: "50%" }}
            >
              ★
            </span>
            <span>☆</span>
          </span>
        )}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{paintings.title}</h2>
      <p>{paintings.description}</p>

      <h3>Available Paintings:</h3>
      <h4>Cart value:</h4>
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
            <p style={{ color: "#f5a623", fontWeight: "bold" }}>
              {renderStars(product.rating)}
            </p>
            <p style={{ fontWeight: "bold" }}>{product.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
