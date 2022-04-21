import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import styles from "./Header.module.css";
import man from "../../assets/man.jpg";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <p>
          <span>M</span>Movra
        </p>
      </div>
      <div className={styles.content}>
        <HiOutlineMail size={25} />
        <FaRegBell size={25} />
        <div className={styles.image__wrapper}>
          <img src={man} alt='man'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
