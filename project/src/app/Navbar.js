// src/app/Navbar.js
"use client";
import React from "react";
import { BiCart, BiHeart, BiSearch, BiUser, BiSupport } from "react-icons/bi";
import styles from "./Navbar.module.css";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const wishlistCount = 2; // static for now
  const { cartCount } = useCart(); // ✅ dynamic cart count

  return (
    <header className={styles.header}>
      <div className={styles.contact}>
        <div>
          <BiSupport size={36} color="#d56043" />
        </div>
        <div>Call: <span>+91 - 9777779191</span></div>
      </div>

      <div className={styles.brand}>
        <strong>Claymax</strong>
        <span>Your Store</span>
      </div>

      <div className={styles.icons}>
        <div className={styles.iconWrapper}><BiSearch size={24} /></div>

        <div className={styles.iconWrapper}>
          <BiHeart size={24} />
          {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
        </div>

        <div className={styles.iconWrapper}>
          <BiCart size={24} />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>} {/* ✅ updates automatically */}
        </div>

        <div className={styles.iconWrapper}><BiUser size={24} /></div>
      </div>
    </header>
  );
};

export default Navbar;
