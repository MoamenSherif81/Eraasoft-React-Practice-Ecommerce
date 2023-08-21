import { Container } from "react-bootstrap";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductsCategories from './../components/ProductsCategories/ProductsCategories';
import { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [currCategory, setCurrCategory] = useState('');

  useEffect(() => {
    if(currCategory == ''){
      fetch('http://localhost:3004/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } else {
      fetch('http://localhost:3004/products?category=' + currCategory)
        .then(res => res.json())
        .then(data => setProducts(data))
    }

  }, [currCategory])

  return (
    <div>
      <Container className='my-5'>
        <ProductsCategories setCurrCategory={setCurrCategory} />
        <ProductsList products={products} /> 
      </Container>
    </div>
  )
}
