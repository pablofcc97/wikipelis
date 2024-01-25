/*import {useState, useEffect} from 'react'
import { useGetData } from '../../../hooks/useGetData'
import { getPopularMovies } from '../../../services/moviesServices'
import CarouselMovieItem from './CarouselMovieItem'
import styles from './styles/latestCarousel.module.css'

const LatestCarousel = () => {
    const [activeItem, setActiveItem] = useState(0)
    const {data:movies, loading} = useGetData(getPopularMovies)
    const changeActiveMovie = (action) => {
        console.log(movies)
        let quantity = movies.length-1
        if(action === 'next'){
            activeItem===quantity ?setActiveItem(0) :setActiveItem(activeItem+1)
            return
        }
        activeItem===0 ?setActiveItem(quantity) :setActiveItem(activeItem-1)
    }

    useEffect(()=>{
        const myTimeOut = setTimeout(()=>changeActiveMovie('next'),10000)
        return () => {
            clearTimeout(myTimeOut)
        }
    },[activeItem])

    // 
    //console.log(movies)
    return(
        <div className={`${styles.latestCarousel} grid`}>
            {loading && <p>Cargando ...</p>}
            {movies ?<CarouselMovieItem  movie={movies[activeItem]} active={true}/> :<></>}
            <div className={`${styles.latestCarousel__nav} flex`}>
                <span onClick={()=>changeActiveMovie('prev')} className={`${styles.latestCarousel__nav__line} `} />
                <span onClick={()=>changeActiveMovie('next')} className={`${styles.latestCarousel__nav__line} `} />
            </div>
        </div>
    )
}


export default LatestCarousel*/


import {useState, useEffect} from 'react'
import { getPopularMovies } from '../../../services/moviesServices'
import CarouselMovieItem from './CarouselMovieItem'
import styles from './styles/latestCarousel.module.css'

const LatestCarousel = () => {
    const [movies, setMovies] = useState([])
    const [activeItem, setActiveItem] = useState(0)

    const changeActiveMovie = (action) => {
        let quantity = movies.length-1
        if(action === 'next'){
            activeItem===quantity ?setActiveItem(0) :setActiveItem(activeItem+1)
            return
        }
        activeItem===0 ?setActiveItem(quantity) :setActiveItem(activeItem-1)
    }

    useEffect( ()=>{
        getPopularMovies().then(response=>setMovies(response))
    },[])

    useEffect(()=>{
        const myTimeOut = setTimeout(()=>changeActiveMovie('next'),10000)
        return () => {
            clearTimeout(myTimeOut)
        }
    },[activeItem])

    // 
    return(
        <div className={`${styles.latestCarousel} grid`}>
            {movies.map((movie, i) => <CarouselMovieItem key={i} movie={movie} active={activeItem===i}/>)}
            <div className={`${styles.latestCarousel__nav} flex`}>
                <span onClick={()=>changeActiveMovie('prev')} className={`${styles.latestCarousel__nav__line} `} />
                <span onClick={()=>changeActiveMovie('next')} className={`${styles.latestCarousel__nav__line} `} />
            </div>
        </div>
    )
}


export default LatestCarousel