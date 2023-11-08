import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import './components/style.css'
function App() {
  const [movies,setMoies] = useState([
    {id:1,
        title: 'Uncharted',
        description:'adventure , action , drama , horror',
        rate:5,
    imgUrl:'https://image.api.playstation.com/vulcan/img/rnd/202010/2620/gPTPUF3mT9FXELav8OKXmr9j.png'},
{id:2,
    title: 'commondo',
    description:'adventure , action , drama ',
    rate:9,
    imgUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Commando_%282013_film%29.jpg/220px-Commando_%282013_film%29.jpg'},
])
// const [filtert,setFiltert]=useState()
// const [filterrat,setFilterrat]=useState()

const [filteredMovies, setFilteredMovies] = useState(movies);

const handleFilterChange = (value, field) => {
  if (field === 'title') {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
  } else if (field === 'rate') {
    const filtered = movies.filter((movie) => movie.rate >= parseFloat(value));
    setFilteredMovies(filtered);
  }
};
// const filtertitle =(e)=>{
//   setFiltert(e.target.value)
// console.log(e)
// }
// const filterrate =(e)=>{
//   setFilterrat(e.target.value)
// const filtermovie = (filtert,filterrat)=>{
//   movies.filter(movies.rate >=filterrat)

// }
// }
  // const handleDelete = (id) =>{
// const newList = Movies.filter((ele)=>{ele.id!==id})
// }
 
  return (
    <div className="App">
      <h1> welcome to My Movie Store </h1> 
      <Filter  onFilterChange={handleFilterChange}/>
      <AddMovie/>
      <MovieList movies={movies}/>
         </div>
  );
 }
export default App;
