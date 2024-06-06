import { useEffect, useState } from "react";
import Logo from "./Logo";
import NumResults from "./NumResult";
import Search from "./Search";
import Navbar from "./Navbar";
import Main from "./Main";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchedSummery from "./WatchedSummery";
import WatchedMovieList from "./WatchedMovieList";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import MovieDetailes from "./MovieDetailes";
import { useLoccalStorageState } from "./useLoccalStorageState";

const KEY = "f84fc31d";
// const KEY = "56c649a";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);
  const [watched, setWatched] = useLoccalStorageState([], "watched");
  // const query = "test";

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddwatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onMovieSelect={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetailes
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              watched={watched ? watched : []}
              onAddWatched={handleAddwatched}
            />
          ) : (
            <>
              <WatchedSummery watched={watched ? watched : []} />
              <WatchedMovieList
                watched={watched ? watched : []}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
