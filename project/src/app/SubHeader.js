import React from "react";
import styles from "./SubHeader.module.css";
import Link from "next/link";

const SubHeader = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/" },
    { name: "Categories", path: "/" },
    { name: "Products", path: "/" },
    { name: "Top Deals", path: "/" },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.name} className={styles.menuItem}>
            <Link href={item.path} className={styles.menuLink}>
              {item.name}
              {item.name !== "Home" && (
                <svg
                  className={styles.downArrow}
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2.5L5 7.5L10 2.5H0Z" />
                </svg>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubHeader;
