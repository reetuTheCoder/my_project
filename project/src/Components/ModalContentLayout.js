"use client";

import React from "react";
import styles from "./Modal.module.css";

const ModalContentLayout = ({ layout = "text-only", imageSrc, children }) => {
  switch (layout) {
    case "image-left":
      return (
        <div className={styles.contentRow}>
          {imageSrc && (
            <div className={styles.imageWrapper}>
              <img src={imageSrc} alt="Modal visual" className={styles.image} />
            </div>
          )}
          <div className={styles.textWrapper}>{children}</div>
        </div>
      );

    case "image-right":
      return (
        <div className={`${styles.contentRow} ${styles.reverse}`}>
          {imageSrc && (
            <div className={styles.imageWrapper}>
              <img src={imageSrc} alt="Modal visual" className={styles.image} />
            </div>
          )}
          <div className={styles.textWrapper}>{children}</div>
        </div>
      );

    case "image-only":
      return (
        <div className={styles.imageOnly}>
          <img src={imageSrc} alt="Modal visual" className={styles.imageFull} />
        </div>
      );

    default:
      return <div className={styles.textOnly}>{children}</div>;
  }
};

export default ModalContentLayout;
