
import { PropTypes } from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import { Row } from 'react-bootstrap';
import { Fragment } from 'react';
import PaginationButton from '../paginationButton/PaginationButton';

const PRODUCTS_PER_PAGE = 8;
export default function ProductsList(props) {
  const pagesNum = Math.ceil(props.products.length / PRODUCTS_PER_PAGE);

  let paginationElements = [];
  for(let i = 0; i < pagesNum; i++){
    paginationElements.push(<PaginationButton setCurrPage={props.setCurrPage} currPage={props.currPage} key={i} text={i + 1} />)
  }

  const start = (props.currPage - 1) * PRODUCTS_PER_PAGE;
  const end = (props.currPage * PRODUCTS_PER_PAGE) - 1;

  return (
    <div>
      {
        props.products.length > 0 ? 
          <Fragment>
            <Row>
              {
                props.products.slice(start, end + 1).map((product) => {
                  return <ProductCard key={product.id} product={product}/>
                })
              }
            </Row>
            <div className='d-flex justify-content-center gap-2'>
              {
                paginationElements
              }
            </div>
          </Fragment>
        :
        <h2 className='text-center'>No Products Available</h2>
      }
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  currPage: PropTypes.any,
  setCurrPage: PropTypes.any,
}