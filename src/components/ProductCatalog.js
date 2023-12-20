import './styles/ProductCatalog.css';
import React, { useState } from 'react';
import Product from './Product';
import CartItem from './CartItem';
import Cart from './Cart';

import MyloImage from './Мыло.jpg';
import CandleImage from './Свечи.jpg';
import StatuetteImage from './Статуэтка.jpg';
import DriedflowerImage from './Сухоцвет.jpg';
import ClockImage from './Часы.jpg';
import CushionImage from './Подушка.jpg';
import BlanketImage from './Одеяло.jpg';
import CupImage from './Кружка.jpg';
import PotImage from './Кастрюля.jpg';

const ProductCatalog = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const newCartItem = new CartItem(product, 1);
    setCartItems([...cartItems, newCartItem]);
  };

  const products = [
    new Product('Мыло подарочное', 3000, MyloImage),
    new Product('Свечи', 1500, CandleImage),
    new Product('Статуэтка', 6000, StatuetteImage),
    new Product('Подушка', 5000, CushionImage),
    new Product('Часы', 7500, ClockImage),
    new Product('Сухоцвет', 1500, DriedflowerImage),
    new Product('Кружка', 1500, CupImage),
    new Product('Кастрюля', 7000, PotImage),
    new Product('Одеяло', 8500, BlanketImage),
  ];

  return (
    <div className="col-md-12">
      <h2 id="soap" className="section-title">
        Ассортимент
      </h2>
      <section className="products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Стоимость: {product.price}тг.</p>
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
          </div>
        ))}
      </section>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default ProductCatalog;