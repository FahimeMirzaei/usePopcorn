import React from "react";

export function useMovie() {
  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );
          if (!res.ok)
            throw new Error("Somthing went wrong with fetching movies!");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          console.log(data.Search);
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 2) {
        setError("");
        setMovies([]);
        return;
      }
      handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query],
  );
}
