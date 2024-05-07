import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Offers from './Pages/Offers';
import {Routes,Route } from 'react-router-dom';
import Help from './Pages/Help';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
function App() {

  return (
    <div className="App overflow-hidden">
     <NavBar></NavBar>
     

    <Routes>
      <Route path='/' index element={<Home></Home>}></Route>
      <Route path='/category' element={<Category></Category>}></Route>
      <Route path='/offers' element={<Offers></Offers>}></Route>
      <Route path='/help' element={<Help></Help>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </div>

  );
}

export default App;
