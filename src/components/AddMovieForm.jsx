import React, { useState } from 'react';
import './AddMovieForm.css'; 

const AddMovieForm = (props) => {

  const {onAddMovie} = props
  
  const [title, setTitle] = useState('');
  const [openingText, setOpeningText] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };

    
    onAddMovie(movie);

    
    setTitle('');
    setOpeningText('');
    setReleaseDate('');
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="openingText">Opening Text</label>
        <textarea
          id="openingText"
          rows="5"
          value={openingText}
          onChange={(event) => setOpeningText(event.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="releaseDate">Release Date</label>
        <input
          type="text"
          id="releaseDate"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
