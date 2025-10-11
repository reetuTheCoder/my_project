"use client";

import React from "react";
import Modal from "./Modal";
import styles from "./TestModal.module.css";

const TestModal = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Hover Modal */}
      <Modal
        trigger={<button className={styles.button}>Hover me</button>}
        title="Image on Left"
        size="medium"
        openMode="hover"
        showCloseButton={false}
        closeOnOverlayClick={false}
        imageSrc="/image.png"
        layout="image-left"
      >
        <p>This modal opens on hover. No overlay or close button.</p>
      </Modal>

      {/* Click Modal */}
      <Modal
        trigger={<button className={styles.button}>Click me</button>}
        title="Click Modal"
        size="medium"
        openMode="click"
        imageSrc="/image.png"
        layout="image-right"
      >
        <p>This modal opens on click. Overlay and close button visible.</p>
      </Modal>

      {/* only text */}
      <Modal
        trigger={<button className={styles.button}>Click me</button>}
        title="Click Modal"
        size="medium"
        openMode="click"
        //  imageSrc="/image.png"
        //  layout="image-right"
      >
        <p>This modal opens on click. Overlay and close button visible.</p>
      </Modal>
    </div>
  );
};

export default TestModal;
