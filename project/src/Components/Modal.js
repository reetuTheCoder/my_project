"use client";

import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import ModalContentLayout from "./ModalContentLayout";

const Modal = ({
  trigger,
  title,
  children,
  imageSrc,
  layout = "text-only", // "text-only" | "image-left" | "image-right" | "image-only"
  size = "medium",
  showCloseButton = true,
  closeOnOverlayClick = true,
  openMode = "click", // "click" | "hover"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const shouldShow = openMode === "hover" ? hovered : isOpen;

  // Prevent scroll lock only for click modals
  useEffect(() => {
    if (openMode === "click" && shouldShow) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [shouldShow, openMode]);

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) setIsOpen(false);
  };

  const modalSizeClass =
    size === "small"
      ? styles.modalSmall
      : size === "large"
      ? styles.modalLarge
      : styles.modalMedium;

  // Clone trigger button
  const clonedTrigger = React.cloneElement(trigger, {
    onClick: (e) => {
      if (openMode === "click") setIsOpen(true);
      trigger.props.onClick?.(e);
    },
    style: { display: "inline-block", ...trigger.props.style },
  });

  // Hover modal (no overlay)
  if (openMode === "hover") {
    return (
      <div
        style={{ display: "inline-block", position: "relative" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {clonedTrigger}
        {shouldShow && (
          <div className={`${styles.hoverModal} ${modalSizeClass}`}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ModalContentLayout layout={layout} imageSrc={imageSrc}>
              {children}
            </ModalContentLayout>
          </div>
        )}
      </div>
    );
  }

  // Click modal (with overlay + close)
  return (
    <>
      {clonedTrigger}
      {shouldShow && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={`${styles.modal} ${modalSizeClass}`}>
            {(title || showCloseButton) && (
              <div className={styles.header}>
                {title && <h2 className={styles.title}>{title}</h2>}
                {showCloseButton && (
                  <button
                    className={styles.closeButton}
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>
                )}
              </div>
            )}
            <ModalContentLayout layout={layout} imageSrc={imageSrc}>
              {children}
            </ModalContentLayout>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
