import { Button, Card, Col } from 'react-bootstrap'
import './ProductCard.css'
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateCartData } from '../../rtk/slices/cartSlice';

export default function ProductCard(props) {
  const dispatch = useDispatch();

  function handleAddtoCart(){
    dispatch(addItem(props.product))
  }

  return (
    <Col md={4} lg={3} className='mb-4'>
      <Card className='h-100'>
        <Card.Img className='card__img' variant="top" src={props.product.thumbnail} />
        <Card.Body className='d-flex flex-column justify-content-between'>
          <div className='mb-3'>
            <Card.Title><Link to={'/products/'+props.product.id} className='text-decoration-none text-black'>{props.product.title}</Link></Card.Title>
            <Card.Text>
              ${props.product.price}
            </Card.Text>
          </div>
          <div className='d-flex gap-3'>
            <Button variant="primary" className='w-100' onClick={handleAddtoCart}>Add to cart</Button>
            <Button variant="danger" className='text-white d-flex align-items-center'><FaHeart /></Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}