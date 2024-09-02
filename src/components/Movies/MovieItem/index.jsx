import { useLocation } from "react-router";

function MovieItem(props) {
  const location = useLocation();
  const { movie } = props;
  const { titleText, primaryImage, releaseYear, plot } = movie;

  console.log(location);
  const addToWatchlist = (movie) => {
    console.log(movie);
    let arr = [];
    const favMovie = localStorage.getItem("favMovie");
    if (favMovie) {
      arr = [...JSON.parse(favMovie)];
      arr.push(movie);
      localStorage.setItem("favMovie", JSON.stringify(arr));
      return true;
    }
    arr.push(movie);
    localStorage.setItem("favMovie", JSON.stringify(arr));
  };

  const deleteMovie = (movie) => {
    let arr = [];
    const favMovie = localStorage.getItem("favMovie");
    if (favMovie) {
      arr = [...JSON.parse(favMovie)];
      const newArr = arr.filter((el) => el.id !== movie.id);
      localStorage.setItem("favMovie", JSON.stringify(newArr));
    }
  };

  /* const checkMovieExists = (movie) => {
    const favMovie = JSON.parse(localStorage.getItem("favMovie"));
    const isMoviePresent = favMovie.findIndex((el) => el.id === movie.id);
    if (isMoviePresent) {
      return true;
    }
    return false;
  };
  */

  return (
    <div className="card p-2 shadow-lg">
      <img src={primaryImage.imageUrl} alt="" />
      <h1 className="font-bold mt-2">{titleText.text}</h1>
      <h2>Released : {releaseYear.year}</h2>
      <p>{plot.plotText.plainText}</p>

      {location.pathname === "/watchlist" ? (
        <button onClick={() => deleteMovie(movie)}>
          {" "}
          Delete from Watchlist
        </button>
      ) : null}
    </div>
  );
}

export default MovieItem;
