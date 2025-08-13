import React from 'react';
import '../components_style/products.css'; 


function ProductSection({ productsData }) { 
  return (
    <section className="product-section">
      <div className="image-container">
        <img src="https://media.istockphoto.com/id/1173006095/es/foto/rodar-sobre-perfume-en-botella-de-color-marr%C3%B3n-oscuro.jpg?s=612x612&w=0&k=20&c=0UL7LSmMIjruwqRTITfVUgFLfrDOY3zOc5Pzg7zDcOY=" alt="Colección Principal de Productos"/>
      </div>

      <h2>Nuestros Productos</h2>

      
      <div className="grid">
        {productsData.map(product => (
          <div key={product.id} className="card">
            <img src={product.image}/>
            <div className="info">
              <h3>{product.title}</h3>
              <p className="category">{product.category}</p>
              <p className="price">${product.price.toFixed(2)}</p> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;