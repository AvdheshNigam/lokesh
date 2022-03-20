import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Products from "../../common/Products";
import productList from "../../../Data/data";
import "./Index.scss";

const Home = () => {
  const [data, setData] = useState(productList);

  const [page, setPage] = useState(0);
  const [searchTemplate, setSearchTemplate] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  let rowsDisplay = 3;
  let dataCount = data.length;

  const pageData = useMemo(() => {
    return data.slice(0, page + rowsDisplay);
  }, [page]);

  const loadMore = (e) => {
    e.preventDefault();
    setLoading(true);
    // setTimeout(() => {
    //   setPage((prev) => prev + rowsDisplay);
    // }, 5000);
    setPage((prev) => prev + rowsDisplay);
    setLoading(false);
    console.log(page);
  };

  console.log(searchTemplate);

  const clickHandler = (cart) => {
    console.log("click handler...");
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
                  <li onClick={() => setData(productList)}>All</li>
                  <li onClick={() => clickHandler("Illustrations")}>
                    Illustrations
                  </li>
                  <li onClick={() => clickHandler("UI designs")}>UI designs</li>
                </ul>
              </div>
            </Col>

            <Products
              data={pageData
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

            {/* {productList && (
              <Products
                data={pageData
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
            )} */}

            <Col lg={{ span: 4, offset: 4 }}>
              {page !== dataCount ? (
                <Button className="load-data" onClick={loadMore}>
                  Load more
                </Button>
              ) : null}
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
