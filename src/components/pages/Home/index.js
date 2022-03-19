import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../../common/Products";
import productList from "../../../Data/data";
import "./Index.scss";

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
              <div className="filter-bar">
                <div className="input">
                  <img src="../images/search-icon.png" />
                  <input type="text" />
                </div>
                <ul>
                  <li>All</li>
                  <li>Illustrations</li>
                  <li>UI designs</li>
                </ul>
              </div>
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
