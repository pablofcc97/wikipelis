import axios from "axios"

const token = import.meta.env.VITE_IMDB_TOKEN
const config = {
    headers: { Authorization: `Bearer ${token}` }
}

export const getPopularMovies = async (page=1) => {
    try{
        const request = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=es&page=${page}`,config)
        return request.data.results
    } catch(err){
        return [{ERROR:err}]
    }
}

export const getTopRatedMovies = async (page=1) => {
    try{
        const request = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=es&page=${page}`,config)
        return request.data.results
    } catch(err){
        return [{ERROR:err}]
    }
}

export const getUpcomingMovies = async (page=1) => {
    try{
        const request = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=es&page=${page}`,config)
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

export const getImageUrl = (size='w350', path) => `https://image.tmdb.org/t/p/${size}/${path}`


//export default {getPopularMovies}