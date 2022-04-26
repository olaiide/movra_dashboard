import React from "react";
import { FiFilter } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import styles from "./Location.module.css";
const Location = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.locations}>
        <p>Locations </p>
        <div className={styles.icon}>
          <BsPlus size={24} />
        </div>
        <div className={styles.icon}>
          <FiFilter size={18} />
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.no}>
          <p>1784</p>
        </div>
        <div></div>
      </div>
      <div className={styles.third}>
        <p className={styles.text}>5626</p>
      </div>
      <div className={styles.common}>
        <p>6065</p>
      </div>
      <div className={styles.common}>
        <p>4349</p>
      </div>
      <div className={styles.common}>
        <p>1374</p>
      </div>
      <div className={styles.common}>
        <p>6025</p>
      </div>
      <div className={styles.common}>
        <p>4152</p>
      </div>
      <div className={styles.common}>
        <p>8861</p>
      </div>
      <div className={styles.common}>
        <p>8829</p>
      </div>
    </div>
  );
};

export default Location;
