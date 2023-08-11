import { Row } from 'react-bootstrap'
import './ProductsSlider.css'
import ProductCard from '../ProductCard/ProductCard'
import PropTypes from 'prop-types';

export default function ProductsSlider(props) {
  return (
    <div className='mt-5'>
      <h3>{props.title}</h3>
      <Row className='align-items-stretch'>
        {props.products.map(product => {
          return <ProductCard key={product.id} product={product} />
        })}
      </Row>
    </div>
  )
}

ProductsSlider.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object)
}