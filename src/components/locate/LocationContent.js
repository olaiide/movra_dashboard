import React from "react";
import { FaSearchengin } from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";
import styles from "./Locate.module.css";
import BarChart from "../barChart/BarChart";
const LocationContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.item1}>
        <div className={styles.topRight}>
          <div>
            <p className={styles.header__text}>LOCATION ID</p>
            <p className={styles.text}>#1234</p>
          </div>
          <div className={styles.state}>
            <p className={styles.header__text}>STATE</p>
            <p className={styles.text}>Lagos State</p>
          </div>
          <div>
            <p className={styles.header__text}>ASSOC. ID</p>
            <p className={styles.text}>T4668</p>
          </div>
        </div>
        <div>
          <div>
            <p className={styles.header__text}>COORDINATES</p>
            <p className={styles.text}> LONG : 152.14.65</p>
            <p className={styles.text} style={{ marginTop: "-8px" }}>
              LAT : 164.67.66
            </p>
          </div>
          <div>
            <p className={styles.header__text}>COUNTRY</p>
            <p className={styles.text}>Nigeria</p>
          </div>
          <div>
            <p className={styles.header__text}>ADDRESS</p>
            <p className={styles.text} style={{whiteSpace : 'preWrap'}}>Lorem ipsium dolor sit</p>
          </div>
        </div>
      </div>
      <div className={styles.item2}>
        <div>
          <div className={styles.header_text}>
            <div>TASK</div>
            <div>COMPLETED</div>
            <div className={styles.no}>123</div>
            <div>NO. OF</div>
            <div>VISITS</div>
          </div>
        </div>
        <div className={styles.collections}>
          <div>% COLLECTION</div>
          <div>% PLANNED</div>
          <div>% ASSIGNED</div>
        </div>
      </div>
      <div className={styles.item3}>
      <div className={styles.risk}>
          <div className={styles.risks}>ISSUES</div>
        <div>
          <div className={styles.no}>
            123{" "}
            <span>
              <FaSearchengin style={{color : 'blue'}}/>
            </span>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.item4}>
        <div className={styles.risk}>
          <div className={styles.risks}>RISKS</div>
        <div>
          <div className={styles.no}>
            234{" "}
            <span>
              <BsExclamationTriangle style={{color : 'red'}}/>
            </span>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.item5}>
      <BarChart />
      </div>
    </div>
   
    </div>
  );
};

export default LocationContent;
