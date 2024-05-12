import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovieForm from "./components/AddMovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryInterval, setRetryInterval] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://swapi.dev/api/films/");

      // Error handling
      if (!response.ok) {
        throw new Error("Something went wrong, Retrying...");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      retryFetchMovies();
    }
  }, []);

  const retryFetchMovies = useCallback(() => {
    setRetryInterval(setInterval(fetchMoviesHandler, 5000));
  }, [fetchMoviesHandler]);

  const cancelRetry = useCallback(() => {
    clearInterval(retryInterval);
    setIsLoading(false);
    setError(null);
  }, [retryInterval]);


  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  useEffect(() => {
    return () => {
      clearInterval(retryInterval);
    };
  }, [retryInterval]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <AddMovieForm onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && (
          <p>No movies found. Fetch to check again.</p>
        )}
        {isLoading && <p>Loading...</p>}
        {error && (
          <div>
            <p>{error}</p>
            <button onClick={cancelRetry}>Cancel</button>
          </div>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
