import React from "react";
import { menuItems } from "@/app/data/menuItems";
import Link from "next/link";

const findSubroute = (categories, slug) => {
  if (!slug.length) return null;

  const subrouteName = slug[0];

  for (const category of categories) {
    const match = category.subroutes?.find(
      (sub) => sub.path.toLowerCase() === subrouteName.toLowerCase()
    );
    if (match) return { ...match, category: category.name };
  }

  return null;
};

export default function ShopPage({ params }) {
  const slug = params.slug || [];
  const shopMenu = menuItems.find((item) => item.name === "Shop");

  const currentSubroute = findSubroute(shopMenu?.modal?.categories, slug);
  console.log(currentSubroute);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shop Page</h1>
      <p>Current Path: {slug.join("/") || "root"}</p>

      {slug.length === 0 && <p>Welcome to the main Shop page!</p>}

      {slug.length > 0 && (
        <div>
          {currentSubroute ? (
            <div>
              <h2>
                {currentSubroute.category} — {currentSubroute.name}
              </h2>
              <p>{currentSubroute.description || shopMenu.modal.description}</p>
            </div>
          ) : (
            <p>Subroute not found.</p>
          )}
        </div>
      )}

      <div style={{ marginTop: "2rem" }}>
        <h3>Top-Level Categories:</h3>
        {shopMenu?.modal?.categories?.map((categor) => {
          console.log("Category:", categor.name);
          categor.subroutes.forEach((sub) => console.log("Subroute:", sub));

          return (
            <div key={categor.name}>
              <h4>{categor.name}</h4>
              <ul>
                {categor.subroutes.map((sub) => (
                  <li key={sub.name}>
                    <Link href={`/shop/${sub.path.toLowerCase()}`}>
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
