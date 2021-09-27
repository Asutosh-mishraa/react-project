import React from 'react';
import styles from "./navigation.module.css";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        
        <div className={styles.navigation}>
            <center><h1 >Testgram</h1>
            <div className={styles.navbtn}>
                <Link to="/"><button className={styles.navb}>Home</button></Link>
                <Link to="/info"><button className={styles.navb}>Info</button></Link>
                <Link to="/products"><button className={styles.navb}>Contents</button></Link>
            </div></center>
        </div>
        
    )
}

export default Navigation
