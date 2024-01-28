import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getImageUrl } from '../../services/moviesServices'
import Carousel from '../../components/Carousel'
import MovieCarousel from '../../components/MovieCarousel'
import YoutubeEmbed from '../../components/youtubeEmbed'
import MovieDetails from './MovieDetails'
import { get } from '../../services/moviesServices'
import styles from './movie.module.css'

const Movie = () =>{
    const id = useParams().id
    const [movie, setMovie] = useState({})
    const [videos, setVideos] = useState([])
    const [relatedMovies, setRelatedMovies] = useState([])

    useEffect(()=>{
        get(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`)
        .then(response => {
            setMovie(response)
        })
        get(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`)
        .then(response => {
            setVideos(response.results.filter(e=>e.site == 'YouTube' && e.type == 'Trailer'))
        })
        get(`https://api.themoviedb.org/3/movie/${id}/similar?language=es-MX&page=1`)
        .then(response => {
            setRelatedMovies(response.results)
        })
    },[])
    if(movie.title){
        return(
            <div className={`${styles.movie}`}>
                <div className={`${styles.movie__background} before`} style={movie.backdrop_path ?{ backgroundImage: `url(${getImageUrl('w1280',movie.backdrop_path)})`} :{}}></div>
                <div className={`${styles.movie__container} container flex`}>
                    <img src={getImageUrl('w300',movie.poster_path)} alt=""  className={`${styles.movie__poster}`}/>
                    <h1 className={`${styles.movie__title}`}>{movie.title}</h1>
                    <p className={`${styles.movie__tagline}`}>{movie.tagline}</p>
                    <p className={`${styles.movie__overview}`}>{movie.overview }</p>
                    {videos.length 
                        ? <>
                            <h2 className={`${styles.movie__subtitle} `}>Trailers</h2>
                            <Carousel>
                                {videos.map((e,i)=>
                                    <div className={`${styles.movie__video}`} key={i}>
                                        <YoutubeEmbed videoKey={e.key}/>
                                    </div>
                                    )}
                            </Carousel>
                        </>
                        : <></>}
                    <MovieDetails movie={movie} />
                    <h2 className={`${styles.movie__subtitle} `}>Relacionadas</h2>
                    <MovieCarousel movies={relatedMovies}/>
                </div>
            </div>
        )
    }
    return <></>
    
}

export default Movie