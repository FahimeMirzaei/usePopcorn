import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onMovieRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={10} size={30} className={"test"} />
    <StarRating
      maxRating={5}
      color="blue"
      messages={["Terrible", "Bad", "Okay", "Good", "awesome"]}
      defaultRating={3}
    />
    <StarRating />
    <Test /> */}
    <App />
  </React.StrictMode>,
);
