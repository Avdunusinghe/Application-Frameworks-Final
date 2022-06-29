import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductList = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const handleAddNewProduct = () => {
    navigate("/product/new" + location.search);
  };
  return (
    <div>
      <button onClick={handleAddNewProduct}>Add Product</button>
    </div>
  );
};

export default ProductList;
