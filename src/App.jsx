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
      const response = await fetch(
        "https://react-http-api-ae8f7-default-rtdb.firebaseio.com/movies.json"
      );

      // Error handling
      if (!response.ok) {
        throw new Error("Something went wrong, Retrying...");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
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

  const addMovieHandler = async (movie) => {
    const { id, title } = movie;

    try {
      const response = await fetch(
        "https://react-http-api-ae8f7-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add movie");
      }

      const data = await response.json();
      console.log(`Movie added ${title} with ID ${data.name}`);

      setMovies((prevMovies) => [...prevMovies, { id: data.name, ...movie }]);
    } catch (error) {
      console.error("Error adding movie:", error.message);
    }
  };

  const deleteMovieHandler = async (movie) => {
    const { id, title } = movie;
    try {
      const response = await fetch(
        `https://react-http-api-ae8f7-default-rtdb.firebaseio.com/movies/${id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete movie");
      }

      setMovies((prevMovies) => prevMovies.filter((mov) => mov.id !== id));
      console.log(`Deleted ${title} successfully with ID: ${id}`);
    } catch (error) {
      console.error("Error deleting movie:", error.message);
    }
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
        {!isLoading && (
          <MoviesList movies={movies} onDeleteMovie={deleteMovieHandler} />
        )}
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
