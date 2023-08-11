import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './SingleProduct.css'
import { Button, Col, Container, Row } from "react-bootstrap";

export default function SingleProduct() {
  const productId = useParams().prodId;
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/products/'+productId);
      const data = await res.json();
      setProduct(data);
    })()
  }, [productId])

  function handleIncreaseQuantity(){
    setQuantity(prev => prev + 1);
  }

  function handleDecreaseQuantity(){
    setQuantity(prev => {
      if(prev == 1) return prev;
      
      return prev - 1;
    });
  }

  function handleQantityChange(e){
    const val = e.target.value;
    if(val < 1){
      setQuantity(1);
    } else {
      setQuantity(val)
    }
  }

  return (
    <Container className="my-5">
      <Row className="align-items-center mb-5">
        <Col md={6} className="single__product-img mb-4 mb-md-0">
          <img className="w-100" src={product.thumbnail} alt="" />
        </Col>
        <Col md={6}>
            <h2>{product.title}</h2>
            <p><span className="fw-bold">Brand: </span>{product.brand}</p>
            <p><span className="fw-bold">Price: </span>{product.price}</p>
            <p><span className="fw-bold">Category: </span>{product.category}</p>
            <div className="d-block d-md-flex gap-3">
              <div className="single__product-quantity d-flex border mb-3 mb-md-0">
                <button className="single__product-quantity-btn border-0 outline-0" onClick={handleIncreaseQuantity}>+</button>
                <input onChange={handleQantityChange} value={quantity} className="border-0 outline-0" />
                <button className="single__product-quantity-btn border-0 outline-0" onClick={handleDecreaseQuantity}>-</button>
              </div>
              <Button className="single__product-add-to-cart flex-grow-1">Add to cart</Button>
            </div>
          </Col>
      </Row>
      <div>
        <h3 className="fw-bolder">More Details: </h3>
        <p>{product.description}</p>
      </div>
    </Container>
  )
}
