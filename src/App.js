import {React, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './Components/Data/Data';
import AddMovie from './Components/AddMovie/AddMovie';
import MovieList from './Components/MovieList/MovieList';
import FilterByName from './Components/FilterByName';
import FilterByRate from './Components/FilterByRate';



function App() {
 
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInpuSearch] =useState("");
  const [rating, setRating] = useState("");
  

  const add =(newMovie)=> {
    setMovies([...movies, newMovie])
  }
  return (
    <div className="App">
    <div className='headerApp'>
    <h1>Movie App</h1>
    <div style={{display:'flex', flexDirection:"row", justifyContent:'space-between', gap:'15px'}}>
    <FilterByName inputSearch={inputSearch} setInputSearch={setInpuSearch}/>
    <FilterByRate isMovieRating={false} rating={rating} setRating={setRating}/>
    </div>
    </div>
    <hr />
    <MovieList movies={movies} inputSearch={inputSearch} rating={rating}/>
    <AddMovie add={add}/>
    </div>
  );
}

export default App;
