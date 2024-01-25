import { useEffect, useState, useRef } from 'react'
import styles from './genreExplore.module.css'
import {get} from '../../../services/moviesServices'
import MovieCarousel from '../../../components/MovieCarousel'

const GenreExplore = () => {
    const [genres, setGenres] = useState([])
    const [activeGenre, setActiveGenre] = useState(genres[0])
    const [movies, setMovies] = useState([])


    const selectCategory = async (category) => {
        const newMovies = await get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc&with_genres=${category}`)
        setMovies(newMovies.results)
        setActiveGenre(category)
    }

    useEffect(()=>{
        get('https://api.themoviedb.org/3/genre/movie/list?language=es')
        .then(response => {
            setGenres(response.genres)
            selectCategory(response.genres[0].id)
        })
    },[])

    return (
        <div className={`${styles.genreExplore} container`}>
            <div className={`${styles.genre__list} flex`}>
                {genres.map((g,i) => <a key={i} className={`${styles.genre__button} ${g.id===activeGenre ?styles.genre__buttonActive :''} button`}  href={`#${g.name}`} onClick={()=>selectCategory(g.id)}>{g.name}</a>)}
            </div>
            <MovieCarousel movies={movies}/>
        </div>
    )
}

export default GenreExplore