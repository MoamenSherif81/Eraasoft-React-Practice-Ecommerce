import { Container } from "react-bootstrap";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import ProductsSlider from "../components/ProductsSlider/ProductsSlider";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/products')
        .then(res => res.json())
        .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <MainCarousel />

      <Container className='my-5'>
        <ProductsSlider title='Latest Products' products={products.slice(0, 4)} />
          
        <ProductsSlider title='Offers' products={products.slice(4, 8)} />
      </Container>
    </div>
  )
}
