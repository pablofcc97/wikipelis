import React from "react";
import styles from './styles/categorieList.module.css'

const CategorieList = ({title, movies}) => {
    return(
        <CategorieList className={styles.categorieList}>
            <h2 className={`${styles.title}`}>{title}</h2>
        </CategorieList>
    )
}

export default CategorieList