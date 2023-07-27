import { Component } from "react";
import { ProductCard } from "./ProductCard/productCard";
import PropTypes from "prop-types";

export class ProductList extends Component {
  state = {
    items: [
      {
        id: 1,
        src: "src/assets/images/product (1).jpg",
        title: "Leather Mens slippers",
        price: 100,
      },
      {
        id: 2,
        src: "src/assets/images/product (2).jpg",
        title: "Leather Mens slippers",
        price: 200,
      },
      {
        id: 3,
        src: "src/assets/images/product (3).jpg",
        title: "Leather Mens slippers",
        price: 199,
      },
      {
        id: 4,
        src: "src/assets/images/product (4).jpg",
        title: "Leather Mens slippers",
        price: 220,
      },
      {
        id: 5,
        src: "src/assets/images/product (5).png",
        title: "Leather Mens slippers",
        price: 350,
      },
      {
        id: 6,
        src: "src/assets/images/product 6.jpg",
        title: "Leather Mens slippers",
        price: 250,
      },
    ]
  }

  render() {
    return (
      <div className="container text-center py-3">
        <div className="row">
          <h1>Products</h1>
          <ProductCard items={this.state.items} />
        </div>
      </div>
    );
  }
}
ProductList.propTypes = {
  items: PropTypes.string.isRequired,
};