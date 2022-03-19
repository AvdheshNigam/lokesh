import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../../common/Products";
import productList from "../../../Data/data";

const Home = () => {
  return (
    <>
      <section className="section-product-home">
        <Container>
          <Row>
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
