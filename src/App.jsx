import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navb from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SingleProduct from './pages/SinglePoroduct/SingleProduct'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <div>
      <Navb />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Shop />} />
        <Route path='/products/:prodId' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
