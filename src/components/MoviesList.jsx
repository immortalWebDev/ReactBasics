import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {

  const {movies,onDeleteMovie} = props

  const handleDeleteMovie = (movie) => {
    onDeleteMovie(movie);
  }
  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <li key={movie.id}>
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
        <button onClick={() => handleDeleteMovie(movie)}>Delete</button>
        <hr />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;