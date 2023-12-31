import React from 'react';
import './styles/PopularProductsSection.css';
import MyloImage from './Мыло.jpg';
import CandleImage from './Свечи.jpg';
import StatuetteImage from './Статуэтка.jpg';

const PopularProductSection = () => {
    const products = [
      {
        id: 1,
        name: 'Мыло подарочное',
        price: 3000,
        description: 'Мыло в подарочной упаковке',
        image: MyloImage,
      },
      {
        id: 2,
        name: 'Свечи ароматические',
        price: 1500,
        description: 'Свечи с разными ароматами',
        image: CandleImage,
      },
      {
        id: 3,
        name: 'Статуэтка',
        price: 5000,
        description: 'Статуэтка',
        image: StatuetteImage,
      },
    ];
  
    return (
      <div className="popular-products">
        <h2 className="section-title">Популярные товары</h2>
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Стоимость: {product.price}тг.</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PopularProductSection;