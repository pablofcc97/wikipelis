import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path='/' 
            element={<Home/>}>
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



