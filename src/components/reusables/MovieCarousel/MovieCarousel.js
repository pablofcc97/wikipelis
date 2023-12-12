import React from "react";
import styles from './styles/movieCarousel.module.css'
import MovieItem from "./MovieItem";

const MovieCarousel = ({movies}) => {
    return(
        <div className={`${styles.movieCarousel} flex`}>
            {movies.map(m=> <MovieItem movie={m}/>)}
        </div>
    )
}   

export default MovieCarousel