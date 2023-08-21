import { PropTypes } from "prop-types";
import { Button } from "react-bootstrap";

export default function CategoryCard(props) {
  return (
    <Button
      variant="primary"
      onClick={() => {
        props.setCurrCategory(props.value);
      }}
    >
      {props.name}
    </Button>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  setCurrCategory: PropTypes.func,
};
