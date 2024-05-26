import MovieItem from '../../MovieCarousel/MovieItem'
import MovieCarousel from '../../MovieCarousel'
import styles from './searchResults.module.css'


const SearchResults = ({movies, mensaje=""}) => {
    return(
        <div className={`${styles.searchResultsContainer}`}>
            <div className={`${styles.searchResults}`}>
                <h3 className={`${styles.searchResultsMessage}`}>{mensaje}</h3>
                <MovieCarousel movies={movies} />
            </div>
        </div>
    )
}

export default SearchResults