import React from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
const Siren = (props) => {
  console.log("siren", props.data[0].labelName);
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
      {props.data &&
        props.data.map((item, key) => {
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
export default Siren;
