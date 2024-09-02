import {Link } from "react-router-dom";
function Navigation() {
    return (
        <ul className='flex justify-center gap-x-5'>
        <Link to= "/home">Movies</Link>
        <Link to= "/watchlist">WatchList</Link>
        </ul>
    );
}

export default Navigation; 