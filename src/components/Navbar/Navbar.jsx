import './navbar.css'
import Logo from '../../images/Logo.png'
import {Link} from 'react-router-dom';
function Navbar() {

  return (
    <nav className='navbar'>
      <div className="content">
        <div className='navbar-left'>
          <img src={Logo} alt="" className='logo'/>
          <ul>
            <Link to ="/">Home</Link>
            <Link to ="/trending">Top Rated</Link>
            <li>Movies</li>       
          </ul> 
        </div>
        <div>
          <ul>
            <li>Account</li>
            <Link to ="/favorites">Favorites</Link>
            <li>Search</li>
          </ul>
        </div>
      </div>
    </nav>  
  )
}

export default Navbar
