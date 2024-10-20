import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce site (electronic commerce site) is a website that allows
          businesses and individuals to buy and sell products or services
          online. These sites facilitate transactions over the internet,
          enabling customers to browse products, make purchases, and manage
          their orders from anywhere with an internet connection.
        </p>
        <p>
          E-commerce sites can vary in scale from small boutique shops to large
          online retailers, but they all share the common goal of providing a
          convenient and efficient way for people to shop online.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
