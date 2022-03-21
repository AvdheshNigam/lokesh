import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Products from "../../common/Products";
import productList from "../../../Data/data";
import "./Index.scss";

const Home = () => {
  const [data, setData] = useState(productList);
  const [element, setElement] = useState(12);
  const [searchTemplate, setSearchTemplate] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isLoad, setIsLoad] = useState("Load more");
  const [visible, setVisible] = useState(false);

  let dataCount = data.length;
  let slice = data.slice(0, element);
  console.log("slice", element);
  const loadMore = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsLoad();
    setTimeout(() => {
      setElement(element + element);
      setLoading(false);
      setIsLoad("Load more");
    }, 100);
  };

  const filterHandler = (cart) => {
    const result = productList.filter((curData) => {
      return curData.catogeries === cart;
    });
    setData(result);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <section className="section-product-home">
        <Container>
          <Row>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              style={{ marginBottom: "20px" }}
            >
              <div className="filter-bar">
                <div className="input">
                  <img src="../images/search-icon.png" />
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchTemplate(e.target.value)}
                  />
                </div>
                <ul>
                  <li className="active" onClick={() => setData(productList)}>
                    All
                  </li>
                  <li onClick={() => filterHandler("Illustrations")}>
                    Illustrations
                  </li>
                  <li onClick={() => filterHandler("UI Designs")}>
                    UI Designs
                  </li>
                </ul>
              </div>
            </Col>
            {productList && (
              <Products
                data={slice
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
          <Row>
            <Col lg={{ span: 4, offset: 4 }}>
              {element.length <= element.length && "not found"}
              {element < dataCount && (
                <Button className="load-data" onClick={loadMore}>
                  {isLoading && (
                    <div className="data-loader"> &bull;&bull;&bull;</div>
                  )}
                  {isLoad}
                </Button>
              )}
            </Col>
          </Row>
          <div
            className="go-to-top"
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
          >
            <img
              src="images/back-arrow.png"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
        </Container>
      </section>
    </>
  );
};
export default Home;
