import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ data }) => {
  return (
    <>
      {data.map((item, key) => {
        return (
          <Col xxl={4} xl={4} lg={4} md={6} sm={12} key={key}>
            <ProductCard
              id={item.id}
              key={key}
              templateName={item.templateName}
              imageUrl={item.imageUrl}
              alt={item.templateName}
              figma={item.figma}
            />
          </Col>
        );
      })}
    </>
  );
};
export default Products;
