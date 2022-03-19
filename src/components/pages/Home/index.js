import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../../common/Products";
import productList from "../../../Data/data";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <section className="section-product-home">
              <Products
                data={productList.filter((item) => item.catogeries === "LED")}
              />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
