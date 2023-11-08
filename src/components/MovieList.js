import './style.css'
import Movie from "./Movie";
const MovieList =({movies})=>{
    return (
        <div className='movieList'>
            {movies.map((mov,index)=>
                <Movie key={index} {...mov}/>)}
        </div>
    )
}
export default MovieList;