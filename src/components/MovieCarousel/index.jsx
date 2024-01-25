import { useEffect, useRef } from 'react'
import MovieItem from './MovieItem'
import styles from './movieCarousel.module.css'
import ArrowLeftImg from '../../assets/images/icons/chevron-left.svg'
import ArrowRightImg from '../../assets/images/icons/chevron-right.svg'

const MovieCarousel = ({movies}) => {

    const DOMScrollref = useRef(null)
    const intervalRef = useRef(0)

    const scrollRight = () => {
        intervalRef.current = setInterval(()=>{
            DOMScrollref.current.scrollLeft += 3
        },5)
    }
    const scrollLeft = () => {
        intervalRef.current = setInterval(()=>{
            DOMScrollref.current.scrollLeft -= 3
        },5)
    }

    useEffect(()=>{
        DOMScrollref.current.scrollLeft = 0
    })

    return (
        <div className={`${styles.movieSlider} flex`}>
            <div className={`${styles.arrowLeft} ${styles.arrow}`} onMouseOver={()=>scrollLeft()} onMouseLeave={()=>clearInterval(intervalRef.current)}>
                <img src={ArrowLeftImg} alt="" />
            </div>
            <div className={`${styles.movieList} flex`} ref={DOMScrollref}>
                {movies.map((m, i) => <MovieItem key={i} movie={m}></MovieItem>)}
            </div>   
            <div className={`${styles.arrowRight} ${styles.arrow}`} onMouseOver={()=>scrollRight()} onMouseLeave={()=>clearInterval(intervalRef.current)}>
                <img src={ArrowRightImg} alt="" />
            </div>
        </div>
    )
}

export default MovieCarousel