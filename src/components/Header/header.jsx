import { useState, useRef, useEffect } from 'react'
import SearchResults from './SearchResults/searchResults'
import { get } from '../../services/moviesServices'
import logo from '../../assets/images/WIKIPELIS.png'
import searchIcon from '../../assets/images/icons/search.svg'
import styles from './header.module.css'


const Header = () => {
    const [searchValue, setSearchValue] = useState('a')
    const [mensaje, setMensaje] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showSearchResults, setShowSearchResults] = useState(false)

    const headerRef = useRef(null)

    const displayMoviesResults = (url, message) => {
        get(url)
            .then(response => {
                setMensaje(message)
                setSearchResult(response.results)
            })
            setShowSearchResults(true)
    }

    const focusSearch = () => {
        displayMoviesResults('https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1', 'Populares ahora:')
    }

    const handleSearch = (value) => {
        if(value.length>0){
            setSearchValue(value)
            displayMoviesResults(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=es-MX&page=1`, `Resultados rapidos para: "${value}"`)  
        }else{
            displayMoviesResults('https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1', 'Populares ahora:')
        }
        //setShow( value.length > 0 )
        //value.length > 0 ? setSearchResult([value]) : setSearchResult([])
        
    }

    const hideSearchResults = (ref) => {
        useEffect(() => {
          const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowSearchResults(false)
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }

    hideSearchResults(headerRef);

    return(
        <div className={`${styles.headerContainer} flex`} ref={headerRef}>
            <div className={`${styles.header} flex`} >
                <a href="/"><img src={logo} alt="" className={`${styles.header__logo}`}/></a>
                <div className={`${styles.searchContainer} flex`}>
                    <input type='search' className={`${styles.searchInput}`} onFocus={()=>focusSearch()} onChange={(e)=>handleSearch(e.target.value)} placeholder='¿Buscas una peli?'></input>
                    <img src={searchIcon} alt="" className={`${styles.searchIcon}`}></img>
                </div> 
            </div>
            
            {showSearchResults && <SearchResults mensaje={mensaje} movies={searchResult}/> }
            
        </div>
    )
}

export default Header