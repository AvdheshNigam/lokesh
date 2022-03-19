import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
// import { default as productList } from "../../../Data/data";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ data }) => {
  return (
    <>
      {data.map((item, key) => {
        return (
          <Col xxl={4} xl={4} lg={4} md={6} sm={12}>
            <ProductCard
              key={key}
              templateName={item.templateName}
              pageUrl={item.pageUrl}
              labelName={item.labelName}
              buttonText={item.buttonText}
              imageUrl={item.imageUrl}
              alt={item.alt}
              id={item.id}
            />
          </Col>
        );
      })}
    </>
  );
};
export default Products;
