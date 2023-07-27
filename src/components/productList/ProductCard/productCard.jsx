import  { Component } from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import "./productCard.css";

export class ProductCard extends Component {
  render() {
    const { items } = this.props;
    console.log(items);
    const renderItems = items.map((item,index) => {
      return (
        <div className="product__card col-lg-4 my-2" key={index}>
        <Card >
          <img src={item.src} alt="" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              ${item.price}
            </Card.Text>
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
        </Card>
        </div>

      );
    });
    return (
      <>
                {renderItems}

      </>
    );
  }
}

ProductCard.propTypes = {
  items: PropTypes.string.isRequired,
  // renderItems: PropTypes.string.isRequired,
  // item: PropTypes.string.isRequired,
};
