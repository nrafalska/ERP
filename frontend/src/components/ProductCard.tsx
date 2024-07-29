import React from 'react';
import './ProductCard.css';

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button>Edit</button>
    </div>
  );
};

export default ProductCard;
