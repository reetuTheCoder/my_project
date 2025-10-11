"use client";
import React from "react";

const StarRating = ({ rating }) => {
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

export default StarRating;
