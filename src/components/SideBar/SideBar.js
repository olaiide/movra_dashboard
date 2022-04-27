import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./SideBar.module.css";
import girl from "../../assets/younggirl.jpg";
import { Data } from "./SideBarData";
const SideBar = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <FaBars size={30} style={{ marginTop: "1.5rem" }} />
        <div className={styles.image__wrapper}>
          <img src={girl} alt='girl' width='40px' />
        </div>
        <div className={styles.icons__wrapper}>
          {Data.map((item) => (
            <div className={styles.icon}key={item.id}>{item.icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
