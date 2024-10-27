import './navbar.css'
import Logo from '../../images/LogoV2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [formData, setFormData] = useState({
    query: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/result', { state: { query } });
    setQuery('');
  };

  const showSideNav = () => {
    setIsVisible(true);
  }
  const hideSideNav = () => {
    setIsVisible(false);
    console.log("X Pressed");
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-left'>
          <Link to="/"> <img src={Logo} alt="" className='logo' /></Link>
          <ul className='medium'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/trending">Top Rated</Link></li>
            <li><Link to="/discover">Discover</Link></li>
          </ul>
        </div>
        <div className='navbar-right'>
          <ul>
            <div className='dropdown large'>
              <li><button>Account</button></li>
              <div className="list">
                <Link to="/favorites">Favorites</Link>
                <Link to="/watchlist">Watchlist</Link>
              </div>
            </div>
            <li className='large'>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search.." className='searchbar' id='search' onChange={handleChange} value={query} />
              </form>
            </li>
            <li ><button className='navbar-icon' onClick={() => showSideNav()}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></button></li>
          </ul>
        </div>
      </nav >
      {
        isVisible && <nav className='side-nav'>
          <ul>
            <li onClick={() => hideSideNav()}><button className='close-button'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/trending">Top Rated</Link></li>
            <li><Link to="/discover">Discover</Link></li>
            <li>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search.." className='searchbar' id='search' onChange={handleChange} value={query} />
              </form>
            </li>
            <div className='dropdown'>
              <li><button>Account</button></li>
              <div className="list">
                <Link to="/favorites">Favorites</Link>
                <Link to="/watchlist">Watchlist</Link>
              </div>
            </div>
          </ul>
        </nav>
      }

    </>

  )
}

export default Navbar
