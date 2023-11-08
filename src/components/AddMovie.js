import {useState,useRef, useEffect} from 'react'
import './style.css'
// let  
// export { movies};
const AddMovie =(movies)=>{
    const [title,setTitle]=useState()
    const [description,setDescription]=useState()
    const [imgUrl,setImgUrl]=useState()
    const [rate,setRate]=useState(0)
    let   [movie,setMovie]=useState([{}])
    let   [mov,setMov]=useState([])
let titleref=useRef()
let descref=useRef()
let imgref=useRef()
let rateref=useRef()
const handleclick =()=>{
    setTitle(titleref.current.value)
    setDescription(descref.current.value)
    setImgUrl(imgref.current.value)
    setRate(rateref.current.value)
    setMovie([title,description,imgUrl,rate])
    setMov([...mov,...movie])
    console.log(movies)
}
return(
<div>
    <div className='addmovie'>
    <input ref={titleref} placeholder='Type Movie title to add'/>
    <input ref={descref} placeholder='your movie description'/>
    <input ref={imgref} placeholder='add your movie image'/>
    <input ref={rateref} placeholder='your movie rate'/>
    <button onClick={handleclick}> Add Movie</button>
    </div>
</div>
)}
export default AddMovie