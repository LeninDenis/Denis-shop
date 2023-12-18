// src/components/ProductCatalog.js
import React from 'react';

const ProductCatalog = () => {
  return (
    <div className="col-md-12">
      <h2 id="soap" className="section-title">Мыло</h2>
      <section className="products">
        {/* Компоненты товаров для раздела "Мыло" */}
        {/* Товар 1 */}
        <div className="product-card">
          <img src="C:\Users\Denis\Downloads\Мыло.jpg" alt="Товар 1" />
          <h3>Мыло подарочное</h3>
          <p>Стоимость: 3000тг.</p>
        </div>

        {/* Товар 2 */}
        <div className="product-card">
          <img src="C:\Users\Denis\Downloads\Свечи.jpg" alt="Товар 2" />
          <h3>Свечи</h3>
          <p>Стоимость: 1500тг.</p>
          
        </div>

        {/* Добавьте другие товары для раздела "Мыло" по аналогии */}
      </section>

      {/* Повторите аналогичные блоки для других разделов (Мебель, Посуда, Декор, Постельное белье, Электроника) */}
      {/* ... */}

    </div>
  );
};

export default ProductCatalog;
