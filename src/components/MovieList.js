import './style.css'
import Movie from "./Movie";
const MovieList =({movies,handleDelete})=>{
    return (
        <div className='movieList'>
            {movies.map((mov,index)=>
                <Movie handleDelete={handleDelete} key={index} {...mov}/>)}
        </div>
    )
}
export default MovieList;