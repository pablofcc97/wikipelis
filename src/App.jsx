import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Result from './pages/Search'
import Header from './components/Header/header'
import './App.css'

function App() {

  return (
    <Router basename="/wikipelis">
      <Header/>
      <div className="App">
        <Routes>
          <Route 
            path='/' 
            element={<Home/>}>
          </Route>
          <Route 
            path='/resultados/' 
            element={<Result/>}>
          </Route>
          <Route 
            path='/pelicula/:id' 
            element={<Movie/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App

//RUTA CAMBIADA A /WIKIPELIS POR GITHUBPAGES

