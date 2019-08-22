import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie.js'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movie, setMovie] = useState([])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(res => {
          // console.log(res.data)
          setMovie(res.data)})
        .catch(err => console.log(err.response));
    },[]) 
    

  return (
    <>
      <SavedList list={savedList} />
     {/* <MovieList movie={movie}/> */}
      <Route exact path="/" 
      render={props => {
        return <MovieList {...props} movie={movie}/>
      }} />
      {/* // component={MovieList} /> */}
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} movie={movie} setMovie={setMovie}/>;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props}  movie={movie} setMovie={setMovie}/>;
        }}
      />
    </>
  );
};

export default App;
