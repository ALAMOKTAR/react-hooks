import {useState} from 'react'
import './style.css'
const AddMovie =({handleAddMovie})=>{
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        imgUrl: "",
        rate: "",
      });
const handleChange= (e)=>{
    const {name,value} = e.target;
    setNewMovie((movie)=>({...movie,[name]:value,}))

    
}
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