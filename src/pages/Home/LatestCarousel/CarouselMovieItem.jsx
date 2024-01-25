import { Link } from 'react-router-dom'
import { getImageUrl } from '../../../services/moviesServices'
import starImage from '../../../assets/images/icons/star.svg'
import styles from './styles/carouselMovieItem.module.css'

const CarouselMovieItem = ({movie, active}) => {
    //console.log(movie)
    return(
        <div style={{ backgroundImage: `url(${getImageUrl('w1280',movie.backdrop_path)})`}} className={`${styles.carouselMovieItem} ${active ?styles.carouselMovieItemActive :''} flex before`}>
            <div className={`${styles.carouselMovieItem__info} flex`}>
                <img src={getImageUrl('w300',movie.poster_path)} alt="" className={styles.carouselMovieItem__poster} />
                <div className={`${styles.carouselMovieItem__data} `}>
                    <h2 className={styles.carouselMovieItem__title}>{movie.title}</h2>
                    <p className={styles.carouselMovieItem__description}>{movie.overview}</p>
                    <span className={`${styles.carouselMovieItem__calification}`}> <img src={starImage} alt="" /> {movie.vote_average.toFixed(1)}</span>
                    <Link to={`/pelicula/${movie.id}`} className={`${styles.carouselMovieItem__button} button`} >
                        Descúbrela
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarouselMovieItem

