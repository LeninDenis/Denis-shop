import React from 'react';
import Product from './Products';

const ProductPage = () => {
  // Здесь можете определить свои товары и их характеристики
  const products = [
    {
      id: 1,
      name: 'Мыло подарочное',
      price: 3000,
      description: 'Мыло в подарочной упаковке',
      image: 'C:\\Users\\Denis\\Downloads\\Мыло.jpg',
    },
    {
      id: 2,
      name: 'Свечи ароматические',
      price: 1500,
      description: 'Свечи с разными ароматами',
      image: 'C:\\Users\\Denis\\Downloads\\Свечи.jpg',
    },
    // Добавьте другие товары
  ];

  // Функция для добавления товара в корзину
  const addItemToCart = (name, price) => {
    console.log(`Товар "${name}" добавлен в корзину за ${price}тг.`);
  };

  return (
    <div>
      <h2>Наш ассортимент</h2>
      <section className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            onAddToCart={() => addItemToCart(product.name, product.price)}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductPage;
