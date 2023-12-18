import React from 'react';

const Product = ({ image, name, price, description, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Стоимость: {price}тг.</p>
      <button onClick={() => onAddToCart(name, price)}>Добавить в корзину</button>
      <p>{description}</p>
    </div>
  );
};

export default Product;
