import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h3>Product List</h3>
      {products.length === 0 ? (
        <p>No Product Found</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

