import React from "react";
import styles from "./Table.module.css";
import { FiFilter } from "react-icons/fi";
const Table = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <header>SUB-PROJECTS</header>
          <header className={styles.parameter}>PARAMETERS</header>
          <header>ACTIVITY LOG</header>
          <header>PICTURES</header>
          <header>VIDEOS</header>
          <header>
            <FiFilter style={{ color: "blue" }} />
          </header>
        </div>
        <div className={styles.parameters}>
          <div className={styles.parameter__wrap}
          >
            <p>Parameter Name</p>
            <p className={styles.value}>Value</p>
          </div>
        </div>
        <div>
          <div className={styles.sub__project__one}>
            <p className={styles.sub}>Subproject 1</p>
            <p>Value 1</p>
          </div>
          <div className={styles.border}></div>
          <div className={styles.sub__project__two}>
            <p className={styles.sub}>Subproject 2</p>
            <p>Value 2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
