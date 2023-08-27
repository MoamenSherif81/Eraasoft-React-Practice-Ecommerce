import { Fragment } from "react";
import CartList from "../../components/CartList/CartList";
import CartInfo from "../../components/CartInfo/CartInfo";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../rtk/slices/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  function handleRemoveAll(){
    dispatch(removeAll());
  }

  return (
    <div className="cart-cont container mt-5">
      <div className="cart-header d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bolder">Shopping Cart</h5>
        <span className="remove-all-products" onClick={handleRemoveAll}>Remove All</span>
      </div>
      {cartItems.length > 0 ? (
        <Fragment>
          <CartList />
          <CartInfo />
        </Fragment>
      ) : (
        <h1 className="text-center mt-5">Cart is empty</h1>
      )}
    </div>
  );
}
