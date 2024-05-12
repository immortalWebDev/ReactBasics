import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

  const {title,releaseDate,openingText} = props

  return (
    <div className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </div>
  );
};

export default Movie;