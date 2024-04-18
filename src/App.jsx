import Home from './pages/Home.jsx'
import {Route, Routes} from 'react-router-dom'
import TopRated from './pages/TopRated.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import CardDetail from './pages/CardDetail.jsx';
import Favorites from './pages/Favorites.jsx';
function App() {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<TopRated/>}/>
      <Route path='/movie/:id' element={<CardDetail/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
    </Routes>   
    </>
  );
}

export default App