import { Button } from 'react-bootstrap'
import './ProductsFilter.css'
import { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';

export default function ProductsFilter(props) {
  const [categories, setCategories] = useState([]);
  const form = useRef();
  const [filter, setFilter] = useState({
    search: '',
    category: '',
    min_price: '',
    max_price: ''
  });
  
  useEffect(() => {
    fetch('http://localhost:3004/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  function getFilteredData(filterQuery){
    fetch(`http://localhost:3004/products?${filterQuery}`)
      .then(res => res.json())
      .then(data => props.setProducts(data))
  }

  function submitHandler(e){
    e.preventDefault();
    let filterArr = [];
    if(filter.category) filterArr.push('category='+filter.category);
    if(filter.min_price) filterArr.push('price_gte='+filter.min_price);
    if(filter.max_price) filterArr.push('price_lte='+filter.max_price);
    if(filter.search) filterArr.push('q='+filter.search);

    let filterQuery = filterArr.join('&');
    props.setCurrPage(1);
    getFilteredData(filterQuery);
  }


  function changeHandler(e){
    const input = e.target;
    setFilter({
      ...filter,
      [input.name]: input.value
    })
  }

  function onResetHandler(){
    setFilter({
      search: '',
      category: '',
      min_price: '',
      max_price: ''
    })

    getFilteredData('')
  }



  return (
    <form onSubmit={submitHandler} ref={form} className='d-flex gap-3 mb-5 flex-wrap'>
      <input value={filter.search} name='search' onChange={changeHandler} type="search" placeholder='Search...' />
      <select value={filter.category} name='category' onChange={changeHandler} id="">
        <option value="" disabled >Select Category</option>
        {categories.map((ele, idx) => {
          return <option key={idx} value={ele}>{ele}</option>
        })}
      </select>
      <input value={filter.min_price} name='min_price' onChange={changeHandler} type="number" placeholder='min price' />
      <input value={filter.max_price} name='max_price' onChange={changeHandler} type="number" placeholder='max price' />
      <Button variant='primary' type='submit'>Filter</Button>
      <Button onClick={onResetHandler} variant='primary'>Reset</Button>
    </form>
  )
}

ProductsFilter.propTypes = {
  setProducts: PropTypes.any,
  currPage: PropTypes.any,
  setCurrPage: PropTypes.any
};
