import React from 'react';
import '../components_style/products.css'; 
// import productsData from '../dataJs/products.json'; // La ruta puede variar según tu estructura
import productsData from '../dataJSON/joyasData.json'


function ProductSection() { 
  return (
    <section className="product-section">
      <div className="image-container">
         <img src="https://i.pinimg.com/1200x/4b/9d/4d/4b9d4dfb93e3ae8a43447c99c37b7457.jpg"/> 
        {/* <img src="https://i.pinimg.com/1200x/ec/ca/a5/eccaa5b697fd5aa393afbb7245e76709.jpg"/>  */}

      </div>

      <h2>Nuestros Productos</h2>

      
      <div className="grid">
        {productsData.map(product => (
          <div key={product.id} className="card">
            <img src={product.image_url}/>
            <div className="info">
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">${product.price.toLocaleString('es-CO')}</p> 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;