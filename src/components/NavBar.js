 import { Anime, Series } from './Links';
import './style.css'
 import{Route,Routes,Link} from 'react-router-dom'
 import Home from './Home';
 const NavBar = ()=>{
    return(
        <div className='navbar'>
           <navbar>
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="series"></Link>Series</li>   
                <li><Link to="anime"></Link> Anime </li>   
            </ul>
            </navbar>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/series' element={<Series/>}></Route>
                <Route path='/anime' element={<Anime/>}></Route>

            </Routes>
        </div>
    )
}
export default NavBar;