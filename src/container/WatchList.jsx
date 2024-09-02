import MovieItem from "../components/Movies/MovieItem";

function WatchList() {
  return (
    <>
      {JSON.parse(localStorage.getItem("favMovie")).map((movie) => (
        <MovieItem movie={movie} />
      ))}
    </>
  );
}

export default WatchList;
