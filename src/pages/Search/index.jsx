import { useEffect, useState } from 'react'
import {get} from '../../services/moviesServices'
import styles from './search.module.css'

const Result = ({location}) => {
    console.log(props)
    const {url} = location 
    const [movies, setMovies] = useState([])
    /*useEffect(()=>{
        get(url)
        .then(response => {
            setMovies(response.results)
        })
    }, [])*/
    return(
        <div className={`${styles.search} container`}>
            <h2>Peliculas</h2>
            <div className={`${styles.searchGrid} grid`}>
                
            </div>
        </div>
    )
}

export default Result