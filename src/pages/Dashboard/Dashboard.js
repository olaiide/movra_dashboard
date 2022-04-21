import React from 'react'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import styles from "./Dashboard.module.css"
const Dashboard = () => {
  return (
    <>
         <SideBar />
        <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
        jefj
        </div>
        </div>
    </>
  )
}

export default Dashboard