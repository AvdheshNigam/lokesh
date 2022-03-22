import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Table, Breadcrumb, Image } from "react-bootstrap";
import productList from "../../../Data/data";
import { Link } from "react-router-dom";
import "./Description.scss";

const Description = (props) => {
  let id = window.location.pathname.split("/")[2];
  const { templateName, imageUrl, description, figma } = productList[id - 1];

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
      <Container>
        <Row>
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            style={{ marginBottom: "25px" }}
          >
            <Link to="/" className="back">
              <img src="../images/arrow.svg" /> <span>back</span>
            </Link>
          </Col>
          <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
            <div className="template-images">
              <Image src={`../../${imageUrl}`} rounded fluid />
              <div className="template-images_right">
                <Image src={`../../${figma}`} />
                Figma
              </div>
            </div>
          </Col>
          <Col xxl={5} xl={5} lg={5} md={12} sm={12}>
            <section className="section-product-description">
              <h1>{templateName}</h1>
              <article>
                <p>{description}</p>
                <div className="custom-article-body">
                  <h4>
                    You can download, use anywhere without giving credits. we
                    are happy with it. :)
                  </h4>
                  <button>Get figma file</button>
                </div>
              </article>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Description;
