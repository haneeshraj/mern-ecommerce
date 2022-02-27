import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <Card className='my-3 p-4 rounded'>
      <Link to={`products/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`products/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
