import React from 'react';
import styles from "./navigation.module.css";
function Products({image,desc,alter}){
    const [no,setlikes]=React.useState(0);
    const[n2,setdislikes]=React.useState(0);
    return(
        <div className={styles.photo}>
        <img src={image} alt={alter} width="100" height="100" />
        <p>{desc}</p>
        <button className={styles.navb} onClick={function(){setlikes(no+1)}}>!!LIKE!!</button>
        <button className={styles.navb} onClick={function(){setdislikes(n2+1)}}>!!DISLIKE!!</button>
        <p>Likes: {no}          Dislikes: {n2}</p>
        </div>
    );
}
export default Products;