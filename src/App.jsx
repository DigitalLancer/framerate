import Home from './pages/Home.jsx'
import {Route, Routes} from 'react-router-dom'
import TopRated from './pages/TopRated.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import CardDetail from './pages/CardDetail.jsx';
import Favorites from './pages/Favorites.jsx';
import SearchResult from './pages/SearchResult.jsx';
import Watchlist from './pages/Watchlist.jsx';
import PersondDetail from './pages/PersondDetail.jsx';
import Discover from './pages/Discover.jsx';
function App() {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<TopRated/>}/>
      <Route path='/movie/:id' element={<CardDetail/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>
      <Route path='/result' element={<SearchResult/>}/>
      <Route path='/discover' element={<Discover/>}/>
      <Route path='/person/:id' element={<PersondDetail/>}/>
    </Routes>   

    </>
  );
}

export default App