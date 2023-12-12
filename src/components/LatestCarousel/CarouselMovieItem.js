import React from "react"
import starImage from '../../assets/images/icons/star.svg'
import styles from './styles/carouselMovieItem.module.css'

const CarouselMovieItem = ({movie, active}) => {
    //console.log(movie)
    return(
        <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}} className={`${styles.carouselMovieItem} ${active ?styles.carouselMovieItemActive :''} flex before`}>
            <div className={`${styles.carouselMovieItem__info} flex`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className={styles.carouselMovieItem__poster} />
                <div className={`${styles.carouselMovieItem__data}`}>
                    <h2 className={styles.carouselMovieItem__title}>{movie.title}</h2>
                    <p className={styles.carouselMovieItem__description}>{movie.overview}</p>
                    <span className={`${styles.carouselMovieItem__calification}`}> <img src={starImage} alt="" /> {movie.vote_average}</span>
                    <a href="/" className={`${styles.carouselMovieItem__button} button`}>Descúbrela</a>
                </div>
            </div>
        </div>
    )
}

export default CarouselMovieItem

