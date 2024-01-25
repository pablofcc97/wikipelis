import { useEffect, useState } from 'react'
import MovieCarousel from '../../../components/MovieCarousel'
import {get} from '../../../services/moviesServices'
import styles from './categorySection.module.css'

const Rated = ({uriRequest, title}) => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        get(uriRequest)
        .then(response => {
            setMovies(response.results)
        })
    },[])
    return(
        <div className={`${styles.popular} container`}>
            <h2 className={`${styles.container__title}`}>{title}</h2>
            <MovieCarousel movies={movies}/>
        </div>
    )
}

export default Rated