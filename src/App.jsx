import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navb from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <div>
      <Navb />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Shop />} />
        <Route path='/products/:prodId' element={<SingleProduct />} />
      </Routes>
    </div>
  )
}

export default App
