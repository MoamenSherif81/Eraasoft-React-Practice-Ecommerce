import { Container } from "react-bootstrap";
import ProductsList from "../components/ProductsList/ProductsList";
import { useEffect, useState } from "react";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3004/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <Container className='my-5'>
        <ProductsFilter setCurrPage={setCurrPage} setProducts={setProducts} />
        <ProductsList currPage={currPage} setCurrPage={setCurrPage} products={products} /> 
      </Container>
    </div>
  )
}

//url parameters