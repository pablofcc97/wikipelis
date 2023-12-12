import styles from './styles/movieItem.module.css'
import starImage from '../../assets/images/icons/star.svg'

const MovieItem = ({movie}) => {
    return(
        <div className={`${styles.movieItem}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" className={styles.movieImage}/>
            <h3 className={`${styles.movie__title}`}>{movie.title}</h3>
            <div className={`${styles.movie__info} flex`}>
                <span className={`${styles.movie__year}`} ></span>
                <span className={`${styles.movie__average}`}> <img src={starImage} alt="" /> {movie.vote_average}</span>
            </div>
        </div>
    )
}

export default MovieItem