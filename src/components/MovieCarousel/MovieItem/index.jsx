import { Link } from 'react-router-dom'
import { getImageUrl } from '../../../services/moviesServices'
import styles from './movieItem.module.css'

const MovieItem = ({ movie }) => {
    return (
        <Link to={`/pelicula/${movie.id}`} className={`${styles.MovieItem} flex before`}>
            <img className={`${styles.MovieItem__img} before`} src={getImageUrl('w185', movie.poster_path)} alt="" />
            <p className={`${styles.MovieItem__title}`}>{movie.title}</p>
        </Link>
    );
}

export default MovieItem;