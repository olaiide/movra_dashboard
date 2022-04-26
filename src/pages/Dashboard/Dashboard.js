import React from "react";
import Header from "../../components/Header/Header";
import LocationContent from "../../components/locate/LocationContent";
import Location from "../../components/Location/Location";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <SideBar />
      <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.content}>
          <Location />
          <LocationContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
