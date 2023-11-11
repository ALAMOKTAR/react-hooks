import {useState} from 'react'
import './style.css'
const AddMovie =({handleAddMovie})=>{
  // our new movie decalaration using useState
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        imgUrl: "",
        rate: "",
      });

      // handle change function to take our inputs data then takes it to our movies
const handleChange= (e)=>{
    const {name,value} = e.target;
    setNewMovie((movie)=>({...movie,[name]:value,}))

    
}
// handleclick function calls the addmovies function from the app component with sending the new movies as parametre  
    const handleclick = () => {
    console.log(newMovie)
        handleAddMovie(newMovie);
        setNewMovie({
          title: "",
          description: "",
          imgURL: "",
          rate: "",
        });
      };

return(
<div>
  {/* interface du add movie component  */}
    <div className='addmovie'>
    <input name='title'  onChange={handleChange} placeholder='Type Movie title to add'/>
    <input name='description' onChange={handleChange} placeholder='your movie description'/>
    <input name='imgUrl' onChange={handleChange} placeholder='add your movie image'/>
    <input name='rate' onChange={handleChange} placeholder='your movie rate'/> 
    <button onClick={handleclick}> Add Movie</button>
    </div>
</div>
)}
export default AddMovie