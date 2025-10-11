"use client";

import React from "react";
import styles from "./SubHeader.module.css";
import Link from "next/link";
import Modal from "../Modal/Modal";
import { menuItems } from "@/app/data/menuItems";
import { useRouter } from "next/navigation";

const SubHeader = () => {
  const router = useRouter();

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
                imageSrcs={item.modal.imageSrcs}
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
                <div className={styles.modalContent}>
                  {item.modal.categories && (
                    <ul className={styles.categoryList}>
                      {item.modal.categories.map((categor, index) => (
                        <li key={index} className={styles.categoryItem}>
                          {/* Category name as plain text */}
                          <div className={styles.categoryHeader}>
                            <strong>{categor.name}</strong>
                          </div>

                          {/* Subroutes list */}
                          {categor.subroutes?.length > 0 && (
                            <ul className={styles.subcategoryList}>
                              {categor.subroutes.map((sub, i) => (
                                <li key={i}>
                                  <span
                                    className={styles.clickable}
                                    onClick={() =>
                                      router.push(
                                        `${item.path}/${sub.path.toLowerCase()}`
                                      )
                                    }
                                  >
                                    {sub.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
