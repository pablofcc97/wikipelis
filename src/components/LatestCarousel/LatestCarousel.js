import React,{useState, useEffect} from 'react'
import { getPopularMovies } from '../../services/moviesServices'
import CarouselMovieItem from './CarouselMovieItem'
import styles from './styles/latestCarousel.module.css'

const LatestCarousel = () => {
    const [movies, setMovies] = useState([])
    const [activeItem, setActiveItem] = useState(0)

    useEffect(()=>{
        getPopularMovies().then(response=>setMovies(response.filter(i => i.title.length<30 && i.overview.length>0)))
    },[])

    useEffect(()=>{
        const myTimeOut = setTimeout(()=>{
            activeItem===movies.length-1 ?setActiveItem(0) :setActiveItem(activeItem+1)
        },10000)
        return () => {
            clearTimeout(myTimeOut)
        }
    },[activeItem])

    // 
    return(
        <div className={`${styles.latestCarousel} grid`}>
            {movies.map((movie, i) => <CarouselMovieItem key={i} movie={movie} active={activeItem===i}/>)}
            <div className={`${styles.latestCarousel__nav} flex`}>
                {movies.map( (movie, i ) => 
                    <span key={i} 
                          onClick={()=>setActiveItem(i)} 
                          className={`${styles.latestCarousel__nav__line} ${activeItem===i ?styles.latestCarousel__nav__lineActive :''}`} 
                    />
                )}
            </div>
        </div>
    )
}


export default LatestCarousel