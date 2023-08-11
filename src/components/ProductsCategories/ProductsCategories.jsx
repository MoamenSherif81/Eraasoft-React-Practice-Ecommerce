import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { PropTypes } from 'prop-types';

export default function ProductsCategories(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
  }, [])

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center mb-3">
      <CategoryCard name='All' value='' setCurrCategory={props.setCurrCategory} />
      {categories.map((category) => {
        return <CategoryCard key={category} name={category} value={category} setCurrCategory={props.setCurrCategory} />
      })}
    </div>
  )
}

ProductsCategories.propTypes = {
  setCurrCategory: PropTypes.func,
  setProducts: PropTypes.func,
}