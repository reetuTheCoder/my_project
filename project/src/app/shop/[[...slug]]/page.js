"use client";
import React from "react";
import { menuItems } from "@/app/data/menuItems";
import dynamic from "next/dynamic";
import Link from "next/link";


const findSubroute = (categories, slug) => {
  if (!slug.length) return null;
  const subrouteName = slug[0].toLowerCase();

  for (const category of categories) {
    const match = category.subroutes?.find(
      (sub) => sub.path.toLowerCase() === subrouteName
    );
    if (match) return { ...match, category: category.name };
  }
  return null;
};

export default function ShopPage({ params }) {
  const { slug = [] } = React.use(params);
  const shopMenu = menuItems.find((item) => item.name === "Shop");
  const currentSubroute = findSubroute(shopMenu?.modal?.categories, slug);

  // Dynamically import subroute components based on slug
  const SubrouteComponent =
    currentSubroute &&
    dynamic(() =>
      import(`../subroutes/${currentSubroute.name}Page.js`).catch(() =>
        import("../subroutes/NotFoundSubroutePage.js")
      )
    );

  return (
    <div style={{ padding: "2rem" }}>
      {slug.length === 0 && (
        <>
          <h1>Shop Page</h1>
          <p>Welcome to the main Shop page!</p>

          <div style={{ marginTop: "2rem" }}>
            <h3>Top-Level Categories:</h3>
            {shopMenu?.modal?.categories?.map((category) => (
              <div key={category.name}>
                <h4>{category.name}</h4>
                <ul>
                  {category.subroutes.map((sub) => (
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
        </>
      )}

      {slug.length > 0 && (
        <>
          {SubrouteComponent ? (
            <SubrouteComponent />
          ) : (
            <p>Subroute not found.</p>
          )}
        </>
      )}
    </div>
  );
}
