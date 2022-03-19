import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./ProductCard.scss";

const ProductCard = ({ id, templateName, imageUrl, figma }) => {
  return (
    <Card className="custom-card">
      <Link to={`template/${id}`}>
        <Card.Img variant="top" src={imageUrl} />
      </Link>
      <Card.Body className="customCardBody">
        <Card.Title className="custom-card-title">{templateName}</Card.Title>
        <Card.Text className="custom-card-text">
          <img src={figma} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
