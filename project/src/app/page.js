import Image from "next/image";
import styles from "./page.module.css";
import TestModal from "@/Components/TestModal";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Setup</h1>
      <TestModal/>
    </div>
  );
}
