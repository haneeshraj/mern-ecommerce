import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { productList } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import ProductCarosel from "../components/ProductCarosel";
import Meta from "../components/Meta";

function HomeScreen() {
  const { keyword, pageNumber } = useParams();
  const dispatch = useDispatch();
  const { products, pages, page, error, loading } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(productList(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  console.log();

  return (
    <>
      <Meta title='Welcome to Proshop | Home'></Meta>
      {!keyword ? (
        <ProductCarosel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
}

export default HomeScreen;
