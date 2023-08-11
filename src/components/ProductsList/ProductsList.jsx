
import { PropTypes } from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import { Row } from 'react-bootstrap';

export default function ProductsList(props) {
  return (
    <Row>
      {props.products.map((product) => {
        return <ProductCard key={product.id} product={product}/>
      })}
    </Row>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}