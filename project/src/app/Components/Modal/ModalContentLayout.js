// Components/Modal/ModalContentLayout.js
import React from "react";
import Image from "next/image";
import styles from "./ModalContentLayout.module.css";

const ModalContentLayout = ({
  layout = "text-only",
  imageSrc,
  imageSrcs,
  children,
}) => {
  const hasMultipleImages = Array.isArray(imageSrcs) && imageSrcs.length > 0;
  const hasSingleImage = imageSrc && !hasMultipleImages;

  const renderImages = () => {
    if (hasMultipleImages) {
      return (
        <div className={styles.multiImageContainer}>
          {imageSrcs.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image src={src} alt={`Modal image ${index + 1}`} fill />
            </div>
          ))}
        </div>
      );
    }

    if (hasSingleImage) {
      return (
        <div className={styles.imageWrapper}>
          <Image src={imageSrc} alt="Modal" fill />
        </div>
      );
    }

    return null;
  };
  switch (layout) {
    case "image-left":
      return (
        <div className={`${styles.modalLayout} ${styles.imageLeft}`}>
          {renderImages()}
          <div className={styles.modalText}>{children}</div>
        </div>
      );

    case "image-right":
      return (
        <div className={`${styles.modalLayout} ${styles.imageRight}`}>
          <div className={styles.modalText}>{children}</div>
          {renderImages()}
        </div>
      );

    case "image-only":
      return <div className={styles.imageOnly}>{renderImages()}</div>;

    default:
      return <div className={styles.modalText}>{children}</div>;
  }
};

export default ModalContentLayout;
