import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarouselHome from "../../common/CarouselHome";
import Products from "../../common/Products";
import Siren from "../../common/Siren/Siren";
// import { default as productList } from "../../Data/data";
import productList from "../../../Data/data";

const Home = () => {
  return (
    <>
      <CarouselHome />
      <Container>
        <Row>
          <Col lg={3} md={3} sm={3} xs={12}>
            <section className="section-product-home">
              <div className="list-group">
                <a className="list-group-item active" href="#">
                  Products List
                </a>
                <a className="list-group-item" href="#">
                  Emergency Bar Lights
                </a>
                <a className="list-group-item" href="#">
                  Emergency Bar LED Lights
                </a>
                <a className="list-group-item" href="#">
                  Revolving Lights
                </a>
                <a className="list-group-item" href="#">
                  LED Lights
                </a>
                <a className="list-group-item" href="#">
                  Siren
                </a>
                <a className="list-group-item" href="#">
                  Speaker
                </a>
                <a className="list-group-item" href="#">
                  Motorized Siren
                </a>
                <a className="list-group-item" href="#">
                  Fog Lights
                </a>
                <a className="list-group-item" href="#">
                  Bus Lights
                </a>
                <a className="list-group-item" href="#">
                  Amplifire
                </a>
                <a className="list-group-item" href="#">
                  Mike
                </a>
                <a className="list-group-item" href="#">
                  Bike Accessoires
                </a>
                <a className="list-group-item" href="#">
                  Car Accessoires
                </a>
              </div>
            </section>
          </Col>

          <Col lg={9} md={9} sm={9} xs={12}>
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
              <Siren
                data={productList.filter((item) => item.catogeries === "SIREN")}
              />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
