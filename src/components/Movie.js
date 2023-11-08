import './style.css'
const Movie =({title,description,rate,imgUrl})=>{
    return(
<div className="movieCard">
    <h3 className='title'>{title}</h3>
    <h4 className='desc'>description : {description}</h4>
    <h4> movie rate  {rate}/10</h4>
    <img src={imgUrl} alt='pho'/>
    <button className='remove'> Remove from list </button>
</div>
    )
}
export default Movie;