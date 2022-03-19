import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./ProductCard.scss";

const ProductCard = ({ id, templateName, imageUrl, buttonText, alt }) => {
  return (
    <div className="item" key={id}>
      <Link to={`description/${id}`}>
        <Image src={imageUrl} alt={alt} fluid />
      </Link>

      <div className="product-description">
        <div className="rating"></div>
        <div className="product-name">
          <h2>{templateName}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
