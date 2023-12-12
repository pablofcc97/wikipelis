import axios from "axios"

const token = process.env.REACT_APP_IMDB_TOKEN
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

export const getPopularMovies = async () => {
    try{
        const request = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=es-ES`,config)
        return request.data.results
    } catch(err){
        return [{ERROR:err}]
    }
}

export const get = async (query) => {
    try{
        const request = await axios.get(query,config)
        return request.data
    }catch(err){
        return [{ERROR:err}]
    }
}


//export default {getPopularMovies}