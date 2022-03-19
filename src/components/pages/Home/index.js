import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../../common/Products";
import productList from "../../../Data/data";

const Home = () => {
  return (
    <>
      <section className="section-product-home">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              {/* <Link to="/">
                <img src="../images/back-arrow.png" />
              </Link> */}
              
            </Col>
            <Products
              data={productList.filter(
                (item) => item.catogeries === "UI designs"
              )}
            />
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Home;
