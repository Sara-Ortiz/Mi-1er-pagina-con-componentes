
import React from 'react';
import Footer from '../shared/components/footer.jsx';
import Header from '../shared/components/header.jsx';
import './cartPage.css'


const CartPage = () => {
  return (
    <div>
      <Header />
        <main className="cart-page-content">
            <div className="cart-container">
                <h2 className="cart-title">Tu Carrito de Compras</h2>
                
                    <div className="cart-items-list">
                        {/* Primer producto de ejemplo */}
                        <div className="cart-item">
                            <img src="https://i.pinimg.com/736x/4d/21/ac/4d21ac75fcc8f834a498af93fffcbca1.jpg" alt="Anillo de Cuarzo Rosa" className="cart-item-image" />
                            <div className="item-details">
                                <h3 className="item-name">Anillo de Cuarzo Rosa</h3>
                                <p className="item-price">65.000 COP</p>
                                <p className="item-quantity">Cantidad: 1</p>
                            </div>
                        </div>

                        {/* Segundo producto de ejemplo */}
                        <div className="cart-item">
                            <img src="https://i.pinimg.com/736x/25/d2/ac/25d2acd3db50ef90157dac91e6ba914a.jpg" alt="Pendientes de Cobre Orgánico" className="cart-item-image" />
                            <div className="item-details">
                                <h3 className="item-name">Pendientes de Cobre Orgánico</h3>
                                <p className="item-price">35.000 COP</p>
                                <p className="item-quantity">Cantidad: 1</p>
                            </div>
                        </div>
                    </div>

                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>100.000 COP</span>
                        </div>
                        <div className="summary-row">
                            <span>Envío:</span>
                            <span>5.000 COP</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total:</span>
                            <span>105.000 COP</span>
                        </div>
                        <button className="checkout-button">Proceder al pago</button>
                    </div>
            </div>
        </main>
      <Footer />
    </div>
  );
};

export default CartPage;