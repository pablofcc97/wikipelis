import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getImageUrl } from '../../services/moviesServices'
import Carousel from '../../components/Carousel'
import { get } from '../../services/moviesServices'
import styles from './movie.module.css'

const Movie = () =>{
    const id = useParams().id
    const [movie, setMovie] = useState({})
    const [videos, setVideos] = useState([])
    console.log(videos)

    useEffect(()=>{
        get(`https://api.themoviedb.org/3/movie/${id}?language=es`)
        .then(response => {
            console.log(response)
            setMovie(response)
        })
        get(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`)
        .then(response => {
            console.log(response)
            setVideos(response.results.filter(e=>e.site == 'YouTube' && e.type == 'Trailer'))
        })
    },[])
    if(movie.title){
        return(
            <div className={`${styles.movie}`}>
                <div className={`${styles.movie__background} before`} style={movie.backdrop_path ?{ backgroundImage: `url(${getImageUrl('w1280',movie.backdrop_path)})`} :{}}></div>
                <div className={`${styles.movie__container} container flex`}>
                    <img src={getImageUrl('w300',movie.poster_path)} alt=""  className={`${styles.movie__poster}`}/>
                    <h1 className={`${styles.movie__title}`}>{movie.title}</h1>
                    <p className={`${styles.movie__tagline}`}>"{movie.tagline}"</p>
                    <p className={`${styles.movie__overview}`}>{movie.overview}</p>
                    {videos.length 
                        ? <>
                            <h2 className={`${styles.movie__subtitle} `}>Videos</h2>
                            <Carousel>
                                {videos.map((e,i)=>
                                    <div className={`${styles.movie__video}`} key={i}>
                                        <iframe 
                                            width="560" height="315" 
                                            src={`https://www.youtube.com/embed/${e.key}?si=a-YUTTjEzfxZbi_O` }
                                            title="YouTube video player" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                    )}
                            </Carousel>
                        </>
                        : <></>}
                    <div className={`${styles.movie__infoContainer} flex`}>
                        <div className={`${styles.movie__info} `}>
                            <h2 className={`${styles.movie__subtitle} `}>Duración</h2>
                            <p className={`${styles.movie__info__content} `}>{movie.runtime} Minutos</p>
                        </div>
                        <div className={`${styles.movie__info} `}>
                            <h2 className={`${styles.movie__subtitle} `}>Lanzamiento</h2>
                            <p className={`${styles.movie__info__content} `}>{movie.release_date} </p>
                        </div>
                        <div className={`${styles.movie__info} `}>
                            <h2 className={`${styles.movie__subtitle} `}>Valoración</h2>
                            <p className={`${styles.movie__info__content} `}>{movie.vote_average.toFixed(1)} / 10 </p>
                        </div>
                        <div className={`${styles.movie__info} `}>
                            <h2 className={`${styles.movie__subtitle} `}>Presupuesto</h2>
                            <p className={`${styles.movie__info__content} `}>{movie.budget} Dólares</p>
                        </div>
                    </div>
                    <h2 className={`${styles.movie__subtitle} `}>Géneros</h2>
                    <div className={`${styles.movie__genres} flex`}>
                        {movie.genres.map((e, i)=><a key={i} href='#' className={`${styles.movie__genre}`}>{e.name}</a>)}
                    </div>
                    <h2 className={`${styles.movie__subtitle} `}>Producida por</h2>
                    <div className={`${styles.movie__genres} flex`}>
                        {movie.production_companies.map((e, i)=><p key={i} className={`${styles.companieName}`}>{e.name}</p>)}
                    </div>
                </div>
            </div>
        )
    }
    return <></>
    
}

export default Movie