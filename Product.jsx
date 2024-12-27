
import React, { useState } from 'react';

const AddProductForm = ({ setProducts, products }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
  
    const trimmedName = name.trim();
    const trimmedPrice = price.trim();
    if (!trimmedName || !trimmedPrice) {
      alert('Please enter product name and price');
      return;
    }
    const productExists = products.some(
      (product) => product.name.trim().toLowerCase() === trimmedName.toLowerCase()
    );

    if (productExists) {
      alert('Product already exists');
      return;
    }
    const newProduct = { name: trimmedName, price: trimmedPrice };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setName('');
    setPrice('');
  };

  return (
    <div>git
      <h3>Add Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
};

export default AddProductForm;
