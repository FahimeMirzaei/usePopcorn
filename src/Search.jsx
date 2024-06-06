import { useEffect, useRef } from "react";

// import { useState } from "react";
export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  // const [query, setQuery] = useState("inception");
  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
        }
      }
      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery],
  );
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
