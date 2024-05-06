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


  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src={Logo} alt="" className='logo' />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/trending">Top Rated</Link></li>
          <li>Movies</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <div className='dropdown'>
            <li><button>Account</button></li>
            <div className="list">
              <Link to="/favorites">Favorites</Link>
              <Link to="/favorites">Watchlist</Link>
            </div>
          </div>
          <li>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Search.." className='searchbar' id='search' onChange={handleChange} value={query} />
            </form>
          </li>
        </ul>
      </div>

    </nav >
  )
}

export default Navbar
