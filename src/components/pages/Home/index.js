import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Products from "../../common/Products";
import productList from "../../../Data/data";
import "./Index.scss";

const Home = () => {
  const [page, setPage] = useState(0);
  const [searchTemplate, setSearchTemplate] = useState("");
  const [design, setDesgin] = useState("UI Design");
  const [isLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  let rowsDisplay = 3;
  let userCount = productList.length;
  const pageData = useMemo(() => {
    return productList.slice(0, page + rowsDisplay);
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

  console.log("ffff", design);

  console.log(searchTemplate);
  const clickhandler = () => {
    console.log("click handler...");
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
                  <li onClick={clickhandler}>All</li>
                  <li onClick={clickhandler}>Illustrations</li>
                  <li onClick={clickhandler}> UI designs</li>
                </ul>
              </div>
            </Col>

            {/* <Products
              data={productList.filter(
                (item) => item.catogeries === "Illustrations"
              )}
            /> */}

            {productList && (
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
            )}

            <Col lg={{ span: 4, offset: 4 }}>
              {page !== userCount ? (
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
