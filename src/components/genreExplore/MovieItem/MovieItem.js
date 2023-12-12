import styles from './movieItem.module.css'

const MovieItem = ({movie}) =>{
    /*return(
        <div className={`${styles.MovieItem} flex before`} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w185/${movie.poster_path})`}}>
            <p className={`${styles.MovieItem__title}`}>{movie.title}</p>
        </div>
    )*/
    return(
        <div className={`${styles.MovieItem} flex before`} >
            <img className={`${styles.MovieItem__img} before`} src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="" />
            <p className={`${styles.MovieItem__title}`}>{movie.title}</p>
        </div>
    )
}

export default MovieItem