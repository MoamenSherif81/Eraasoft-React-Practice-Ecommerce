import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductsCategories from './../components/ProductsCategories/ProductsCategories';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [currCategory, setCurrCategory] = useState('');

  useEffect(() => {
    async function getData(){
      let res;
      if(currCategory === ''){
        res = await fetch('http://localhost:3000/products');
      } else {
        res = await fetch('http://localhost:3000/products?category='+currCategory);
      }
      const data = await res.json();
      setProducts(data);
    }

    getData();
  }, [currCategory])

  return (
    <Container className="my-5">
      <ProductsCategories setProducts={setProducts} setCurrCategory={setCurrCategory} />
      <ProductsList products={products} /> 
    </Container>
  )
}
