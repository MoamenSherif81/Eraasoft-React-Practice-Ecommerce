import { PropTypes } from 'prop-types';

export default function CartProduct(props) {


  return (
    <tr className="cart-product">
    <td>
      <div className="d-flex gap-3 align-items-center">
        <img className="cart-product-img p-2" src={props.product.thumbnail} alt='' />
        <h5>{props.product.title}</h5>
      </div>
    </td>

    <td>
      <div className="cart-product-amount px-2">
        <span className="change-amount change-amount-inc">+</span>
        <span className="quantity">3</span>
        <span className="change-amount change-amount-dec">-</span>
      </div>
    </td>

    <td>
      <div className="mb-2 d-flex flex-column text-end justify-content-end align-items-end">
        <span className="fw-bolder fs-4">${props.product.price}</span>
        <span className="remove-product">Remove</span>
      </div>
    </td>
  </tr>
  )
}

CartProduct.propTypes = {
  product: PropTypes.any
}