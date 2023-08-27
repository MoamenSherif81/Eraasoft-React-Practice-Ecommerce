import { Fragment } from "react";
import CartList from "../../components/CartList/CartList";
import CartInfo from "../../components/CartInfo/CartInfo";
import './Cart.css'

export default function Cart() {

  return (
    <div className="cart-cont container mt-5">
      <div className="cart-header d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bolder">Shopping Cart</h5>
        <span className="remove-all-products">
          Remove All
        </span>
      </div>
      <Fragment>
        <CartList />
        <CartInfo />
      </Fragment>
      {/*<h1 className="text-center mt-5">Cart is empty</h1>*/}
    </div>
  );
}
