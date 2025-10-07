import React from "react";
import styles from "./SubHeader.module.css";
import Link from "next/link";
import Modal from "@/Components/Modal";

const SubHeader = () => {
  // const menuItems = [
  //   { name: "Home", path: "/" },
  //   { name: "Shop", path: "/" },
  //   { name: "Categories", path: "/" },
  //   { name: "Products", path: "/" },
  //   { name: "Top Deals", path: "/" },
  // ];
  const menuItems = [
    {
      name: "Home",
      path: "/",
      modal: null, // No modal for Home
    },
    {
      name: "Shop",
      path: "/shop",
      modal: {
        title: "Shop Categories",
        imageSrc: "/shop.jpg",
        layout: "image-left",
        content: <p>Explore thousands of products in our shop section.</p>,
      },
    },
    {
      name: "Categories",
      path: "/categories",
      modal: {
        title: "Browse Categories",
        imageSrc: "/categories.jpg",
        layout: "image-right",
        content: <p>Find the best deals across all our categories.</p>,
      },
    },
    {
      name: "Products",
      path: "/products",
      modal: {
        title: "Top Products",
        imageSrc: "/products.jpg",
        layout: "image-left",
        content: <p>Discover our featured and best-selling products.</p>,
      },
    },
    {
      name: "Top Deals",
      path: "/deals",
      modal: {
        title: "Limited Time Offers",
        // imageSrc: "/deals.jpg",
        // layout: "image-right",
        content: <p>Don’t miss our exclusive limited-time deals!</p>,
      },
    },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.name} className={styles.menuItem}>
            {item.modal ? (
              <Modal
                openMode="hover"
                title={item.modal.title}
                layout={item.modal.layout}
                imageSrc={item.modal.imageSrc}
                size="medium"
                showCloseButton={false}
                closeOnOverlayClick={false}
                trigger={
                  <Link href={item.path} className={styles.menuLink}>
                    {item.name}
                    <svg
                      className={styles.downArrow}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 2.5L5 7.5L10 2.5H0Z" />
                    </svg>
                  </Link>
                }
              >
                {item.modal.content}
              </Modal>
            ) : (
              <Link href={item.path} className={styles.menuLink}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubHeader;
