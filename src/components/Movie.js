import './style.css'
const Movie =({title,description,rate,imgUrl,handleDelete})=>{
    return(
<div className="movieCard">
    <img src={imgUrl} className='imgs' alt='pho'/>
    <h3 className='title'>{title}</h3>
    <h4 className='desc'>description : {description}</h4>
    <h4> movie rate  {rate}/10</h4>
    <button className='remove' onClick={handleDelete}> Remove from list </button>
</div>
    )
}
export default Movie;