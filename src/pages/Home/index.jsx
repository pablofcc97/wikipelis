import LatestCarousel from './LatestCarousel'
import GenreExplore from './genreExplore'
import CategorySection from './CategorySection'

function Home() {

  return (
    <div className="Home">
      <LatestCarousel/>
      <GenreExplore/>
      <CategorySection uriRequest={'https://api.themoviedb.org/3/movie/popular?language=es&page=1'} title={'Tendencias'}/>
      <CategorySection uriRequest={'https://api.themoviedb.org/3/movie/top_rated?language=es&page=1'} title={'Mejor votados'}/>
      <CategorySection uriRequest={'https://api.themoviedb.org/3/movie/upcoming?language=es&page=1'} title={'Proximos estrenos'}/>   
    </div>
  );
}

export default Home

