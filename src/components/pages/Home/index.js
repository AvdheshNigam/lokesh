import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../../common/Products";
import productList from "../../../Data/data";
import "./Index.scss";

const Home = () => {
  const [searchTemplate, setSearchTemplate] = useState("");

  console.log(searchTemplate);
  const clickhandler = () => {
    console.log("click handler...");
  };
  return (
    <>
      <section className="section-product-home">
        <Container>
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ marginBottom: "20px" }}
            >
              <div className="filter-bar">
                <div className="input">
                  <img src="../images/search-icon.png" />
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={(event) => setSearchTemplate(event.target.value)}
                  />
                </div>
                <ul>
                  <li onClick={clickhandler}>All</li>
                  <li onClick={clickhandler}>Illustrations</li>
                  <li onClick={clickhandler}> UI designs</li>
                </ul>
              </div>
            </Col>
            {/* <Products
              data={productList.filter(
                (item) => item.catogeries === "UI designs"
              )}
            /> */}

            {productList && (
              <Products
                data={productList
                  .filter((template) => {
                    if (searchTemplate == "") {
                      return template;
                    } else if (
                      template.templateName
                        .toLowerCase()
                        .includes(searchTemplate.toLowerCase())
                    ) {
                      return template;
                    }
                  })
                  .map((item) => item)}
              />
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Home;
