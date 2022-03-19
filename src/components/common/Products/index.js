import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
// import { default as productList } from "../../../Data/data";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item, key) => {
        return (
          <ProductCard
            key={key}
            productName={item.productName}
            pageUrl={item.pageUrl}
            labelName={item.labelName}
            buttonText={item.buttonText}
            imageUrl={item.imageUrl}
            alt={item.alt}
            id={item.id}
          />
        );
      })}
    </Slider>
  );
};
export default Products;
