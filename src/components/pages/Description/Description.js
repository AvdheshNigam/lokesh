import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Table, Breadcrumb, Image } from "react-bootstrap";
import productList from "../../../Data/data";
import { Link } from "react-router-dom";
import "./Description.scss";
// import { useParams } from "react-router-dom";

const Description = (props) => {
  let id = window.location.pathname.split("/")[2];
  console.log("url", id);
  const { templateName, imageUrl, catogeries, image, description } =
    productList[id - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section-product-home">
      <Helmet>
        <title>{templateName}</title>
        <meta name="description" content={{ templateName }} />
        <meta name="keywords" content={{ templateName }} />
      </Helmet>
      {/* <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Link to="/">
              <img src="../images/back-arrow.png" />
            </Link>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Link to="/">
              <img src="../images/back-arrow.png" />
            </Link>
          </Col>
          <Col lg={5} md={5} sm={5} xs={12}>
            <div className="slider-images_big">
              <Image src={`../../${imageUrl}`} rounded fluid />
            </div>
          </Col>
          <Col lg={7} md={7} sm={7} xs={12}>
            <section className="section-product-description">
              <h1 className="latest-product-title">{templateName}</h1>
              <article>
                <p>{description}</p>
                <h4>
                  You can download, use anywhere without giving credits. we are
                  happy with it. :)
                </h4>
                <button>Get figma file</button>
              </article>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Description;
