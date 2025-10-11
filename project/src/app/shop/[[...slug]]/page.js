import React from "react";
import { menuItems } from "@/app/data/menuItems";
import Link from "next/link";

const findCategory = (categories, slug) => {
  if (!slug.length) return null;
  let current = categories;
  for (const part of slug) {
    const found = current.find(
      (c) => c.name.toLowerCase().replace(/ /g, "-") === part
    );
    if (!found) return null;
    current = found.subcategories || [];
  }
  return current;
};

export default function ShopPage({ params }) {
  const slug = params.slug || []; // [] for /shop, ['wall-art'] for /shop/wall-art
  const shopMenu = menuItems.find((item) => item.name === "Shop");

  const currentCategory = findCategory(shopMenu?.modal?.categories, slug);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shop Page</h1>
      <p>Current Path: {slug.join("/") || "root"}</p>

      {slug.length === 0 && <p>Welcome to the main Shop page!</p>}

      {slug.length > 0 && (
        <div>
          <h2>Category: {slug.join(" / ")}</h2>
          {currentCategory?.length > 0 ? (
            <ul>
              {currentCategory.map((cat, i) => (
                <li key={i}>
                  <strong>{cat.name}</strong> — {cat.description}
                  {cat.subcategories?.length > 0 && (
                    <ul>
                      {cat.subcategories.map((sub, j) => (
                        <li key={j}>
                          <Link
                            href={`/shop/${slug.join("/")}/${sub.name
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No further subcategories.</p>
          )}
        </div>
      )}

      <div style={{ marginTop: "2rem" }}>
        <h3>Top-Level Categories:</h3>
        <ul>
          {shopMenu?.modal?.categories.map((cat) => (
            <li key={cat.name}>
              <Link
                href={`/shop/${cat.name.toLowerCase().replace(/ /g, "-")}`}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
