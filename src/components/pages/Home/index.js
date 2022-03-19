import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Products from "../../common/Products";
// import { default as productList } from "../../Data/data";
import productList from "../../../Data/data";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <section className="section-product-home">
              <div className="latest-product-title">
                <div className="text-content">
                  <h1>Revolving Lights</h1>
                  {/* <h1>Revolving Lights</h1> */}
                </div>
                <p>
                  We have grouped all the products for easy browsing and
                  searching
                </p>
              </div>
              <Products
                data={productList.filter((item) => item.catogeries === "LED")}
              />
              <div className="latest-product-title">
                <h1>Motorized Siren 220 Volt - Aluminum</h1>
                <p>
                  We have grouped all the products for easy browsing and
                  searching
                </p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
