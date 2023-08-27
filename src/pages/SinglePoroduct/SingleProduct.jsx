import { useParams } from 'react-router-dom'
import './SingleProduct.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function SingleProduct() {
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3004/products/' + prodId)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [prodId])

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  }

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      if(prev === 1) return prev;

      return prev - 1;
    });
  }

  const handleQuantityChange = (e) => {
    const val = e.target.value;
    if(val < 1) setQuantity(1);
    else setQuantity(val)
  }

  return (
    <Container className='my-5'>
      <Row className='align-items-center mb-4'>
        <Col md={6} className='mb-4 mb-md-0'>
          <img className='w-100' src={product.thumbnail} alt="" />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p><span className='fw-bolder'>Price: </span>{product.price}$</p>
          <p><span className='fw-bolder'>Brand: </span>{product.brand}</p>
          <p><span className='fw-bolder'>Category: </span>{product.category}</p>
          <div className='single__product-add-to-cart d-flex gap-3'>
            <div className='single__product-quantity d-flex border rounded-2'>
              <button className='single__product-quntity-btn border-0' onClick={handleIncreaseQuantity}>+</button>
              <input type='number' onChange={handleQuantityChange} value={quantity} className='single__product-quntity-input border-0' />
              <button className='single__product-quntity-btn border-0' onClick={handleDecreaseQuantity}>-</button>
            </div>
            <Button className='flex-grow-1' variant='primary'>Add to cart</Button>
            <Button variant="danger" className='text-white d-flex align-items-center'><FaHeart /></Button>
          </div>
        </Col>
      </Row>
      <div>
        <h2 className='fw-bolder'>More Details:</h2>
        <p>{product.description}</p>
      </div>
    </Container>
  )
}
