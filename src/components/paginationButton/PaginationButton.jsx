import { Button } from "react-bootstrap";
import { PropTypes } from 'prop-types';
import './PaginationButton.css'

export default function PaginationButton({text, setCurrPage, currPage}) {
  return (
    <Button className="pagination__button" variant={currPage == text ? "primary" : "secondary"} onClick={() => setCurrPage(+text)}>
      {text}
    </Button>
  )
}

PaginationButton.propTypes = {
  text: PropTypes.any,
  setCurrPage: PropTypes.any,
  currPage: PropTypes.any
}