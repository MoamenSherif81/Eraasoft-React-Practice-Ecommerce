import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SinglePoroduct/SingleProduct";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import IsLoggedIn from "./components/IsLoggedIn";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcQuantities, getCartData, updateCartData } from "./rtk/slices/cartSlice";

function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const userId = useSelector(state => state.authReducer.userId);
  const cart = useSelector(state => state.cartReducer.cart);
  const dispatch = useDispatch();

  console.log(cart);

  useEffect(() => {
    if(isAuth){
      dispatch(getCartData(userId));
    }
  }, [dispatch, isAuth, userId]);


  useEffect(() => {
    dispatch(updateCartData({id: userId, cart}))
    dispatch(calcQuantities())
  }, [cart, dispatch, userId])

  return (
    <div>
      <Navb />
      <Routes>
        <Route
          path="/"
          element={
            <IsLoggedIn type="isAuth">
              <Home />
            </IsLoggedIn>
          }
        />
        <Route
          path="/products"
          element={
            <IsLoggedIn type="isAuth">
              <Shop />
            </IsLoggedIn>
          }
        />
        <Route
          path="/products/:prodId"
          element={
            <IsLoggedIn type="isAuth">
              <SingleProduct />
            </IsLoggedIn>
          }
        />
        <Route
          path="/cart"
          element={
            <IsLoggedIn type="isAuth">
              <Cart />
            </IsLoggedIn>
          }
        />
        <Route
          path="/login"
          element={
            <IsLoggedIn type="notIsAuth">
              <Login />
            </IsLoggedIn>
          }
        />
        <Route
          path="/register"
          element={
            <IsLoggedIn type="notIsAuth">
              <Register />
            </IsLoggedIn>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
