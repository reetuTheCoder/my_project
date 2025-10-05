import React from "react";
import SubHeader from "./SubHeader";
import { BiSearch, BiHeart, BiCart, BiUser, BiSupport } from "react-icons/bi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const wishlistCount = 2;
  const cartCount = 3;
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contact}>
          <div>
            <BiSupport size={36} color="#d56043" />
          </div>
          <div>
            Call: <span>+91 - 9777779191</span>
          </div>
        </div>

        <div className={styles.brand}>
          <strong>Claymax</strong>
          <span>Your Store</span>
        </div>

        <div className={styles.icons}>
          <div className={styles.iconWrapper}>
            <BiSearch size={24} />
          </div>

          <div className={styles.iconWrapper}>
            <BiHeart size={24} />
            {wishlistCount > 0 && (
              <span className={styles.badge}>{wishlistCount}</span>
            )}
          </div>

          <div className={styles.iconWrapper}>
            <BiCart size={24} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </div>

          <div className={styles.iconWrapper}>
            <BiUser size={24} />
          </div>
        </div>
      </header>

      <SubHeader />
    </>
  );
};

export default Navbar;
