import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { productList } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";

function HomeScreen() {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(productList(keyword));
  }, [dispatch, keyword]);
  console.log();

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
}

export default HomeScreen;
