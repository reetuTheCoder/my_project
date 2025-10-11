import React from "react";
import Link from "next/link";
import { menuItems } from "@/app/data/menuItems";
import Paintings from "../subroutes/Paintings";


const components = { Paintings, };

const findSubroute = (categories, slug) => {
  if (!slug.length) return null;
  const name = slug[0].charAt(0).toUpperCase() + slug[0].slice(1);
  for (const category of categories) {
    const match = category.subroutes?.find(
      (sub) => sub.name.toLowerCase() === name.toLowerCase()
    );
    if (match) return { ...match, category: category.name };
  }
  return null;
};

export default function ShopPage({ params }) {
  const slug = params.slug || [];
  const shopMenu = menuItems.find((item) => item.name === "Shop");
  const currentSubroute = findSubroute(shopMenu?.modal?.categories, slug);

  const SubrouteComponent = currentSubroute
    ? components[currentSubroute.name]
    : null;

  // Show all subcategories if no subroute selected
  if (!slug.length) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Shop Page</h1>
        {shopMenu?.modal?.categories?.map((cat) => (
          <div key={cat.name}>
            <h2>{cat.name}</h2>
            <ul>
              {cat.subroutes.map((sub) => (
                <li key={sub.name}>
                  <Link href={`/shop/${sub.path.toLowerCase()}`}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Show selected subroute page
  if (SubrouteComponent) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>{currentSubroute.category} — {currentSubroute.name}</h1>
        <SubrouteComponent />
      </div>
    );
  }

  return <p>Subroute not found.</p>;
}
