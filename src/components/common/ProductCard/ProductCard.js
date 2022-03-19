import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({
  id,
  productName,
  pageUrl,
  imageUrl,
  alt,
  labelName,
  buttonText,
}) => {
  return (
    <div className="item" key={id}>
      <Link to={`description/${pageUrl}`}>
        <img className="img-fluid" src={imageUrl} title={alt} />
      </Link>
      <span className="sticker top-right">
        <span className="label-right">{labelName}</span>
      </span>

      <div className="product-description">
        <div className="rating"></div>
        <div className="product-name">
          <h2>{productName}</h2>
          <a href={buttonText}>Show Product</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
