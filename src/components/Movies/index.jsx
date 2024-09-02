import MovieItem from './MovieItem';
import Pagination from './Pagination'
function Movies(props) {
    const {movies} = props;
    return (
    <>
    <div className='grid grid-cols-4 gap-4 mt-10'>
        {movies.map(movie => <MovieItem movie={movie} key={movie.id} />)}
    </div>
        <Pagination />
    </>
    );
}

export default Movies;
