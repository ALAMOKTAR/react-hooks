// items we imported for our app component
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import './components/style.css'
function App() {
  // our movies objects data 
let  [movies,setMovies] = useState([
  {title:'One Piece',description:'Comedy , Adventure , Action' ,rate:10,imgUrl:'https://upload.wikimedia.org/wikipedia/en/b/b0/Dead_End_no_B%C5%8Dken.jpg'},
   {title:'Attack on Titan',description:'Maset',rate:2,imgUrl:'https://m.media-amazon.com/images/I/91HfjIdXvrL._AC_UF1000,1000_QL80_.jpg' },
   {title: 'Uncharted',description:'adventure , action , drama , horror',rate:5,
    imgUrl:'https://image.api.playstation.com/vulcan/img/rnd/202010/2620/gPTPUF3mT9FXELav8OKXmr9j.png'},
{
    title: 'commondo',
    description:'adventure , action , drama ',
    rate:9,
    imgUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Commando_%282013_film%29.jpg/220px-Commando_%282013_film%29.jpg'},
])
// delete movie function 
 const handleDelete = (index) =>{
 movies = movies.filter((ele)=>ele.index!==index)
 }
//  declaration des variable pour preparer pour filter 
const [titleFiltre, setTitleFiltre] = useState("");
  const [rateFiltre, setRateFiltre] = useState(0);

const handleTitleChange = (event) => {
  setTitleFiltre(event.target.value);
};

const handleRateChange = (event) => {
  setRateFiltre(event.target.value);
};
// filter dans une nouveau tableau 
const moviesFiltres = movies.filter(
  (film) =>
    film.title.toLowerCase().includes(titleFiltre.toLowerCase()) &&
    film.rate >= rateFiltre
);
// function addmovie using spread method to push the new movie to our movie list
const handleAddMovie = (newMovie)=>{
  setMovies([newMovie,...movies])
}
  return (

    <div className="App">
      <div className="filter">
      <h1> welcome to My Movie Store </h1> 

      </div>
{/* filter composant que contient les input de filter */}
      <Filter  handleTitleChange={handleTitleChange} handleRateChange={handleRateChange} />
     {/* addmovie composant que contient les input pour l'ajoute d'un nouveau movie */}
      <AddMovie handleAddMovie={handleAddMovie}/>
      {/* movie list contient notre movie list  */}
      <MovieList movies={moviesFiltres} handleDelete={handleDelete} />
         </div>
  );
 }
export default App;
