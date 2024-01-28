import styles from './movieDetails.module.css'

const MovieDetails = ({movie}) => {
    return(
        <div className={`${styles.movieDetails}`}>
            <h2 className={`${styles.movie__subtitle} `}>Detalles</h2>
                <div className={`${styles.movie__infoContainer} flex`}>
                    <div className={`${styles.movie__info} `}>
                        <h3 className={`${styles.info__title} `}>Duración</h3>
                        <p className={`${styles.movie__info__content} `}>{movie.runtime} Minutos</p>
                    </div>
                    <div className={`${styles.movie__info} `}>
                        <h3 className={`${styles.info__title} `}>Lanzamiento</h3>
                        <p className={`${styles.movie__info__content} `}>{movie.release_date} </p>
                    </div>
                    <div className={`${styles.movie__info} `}>
                        <h3 className={`${styles.info__title} `}>Valoración</h3>
                        <p className={`${styles.movie__info__content} `}>{movie.vote_average.toFixed(1)} / 10 </p>
                    </div>
                    <div className={`${styles.movie__info} `}>
                        <h3 className={`${styles.info__title} `}>Presupuesto</h3>
                        <p className={`${styles.movie__info__content} `}>{movie.budget} Dólares</p>
                    </div>
                </div>
                <h3 className={`${styles.info__title} `}>Géneros</h3>
                <div className={`${styles.movie__infoContainerSimple+' '+ styles.movie__infoContainer} flex`}>
                    {movie.genres.map((e, i)=><a key={i} href='#' className={`${styles.movie__genre}`}>{e.name}</a>)}
                </div>
                <h3 className={`${styles.info__title} `}>Producida por</h3>
                <div className={`${styles.movie__infoContainerSimple+' '+styles.movie__infoContainer} flex`}>
                    {movie.production_companies.map((e, i)=><p key={i} className={`${styles.companieName}`}>{e.name}</p>)}
                </div>
        </div>
    )
}
export default MovieDetails