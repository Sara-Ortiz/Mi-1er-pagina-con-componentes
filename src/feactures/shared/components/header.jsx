import '../components_style/header.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-header">
            <h1 className="logo">Piedra Viva ☽</h1>
            
            <nav className="main-nav">
                <Link to="/">Inicio</Link>
                <Link to="/coleccion">Colección</Link>
                <Link to="/acerca-de">Acerca de</Link>
            </nav>

            <div className="header-icons">
                <a href="#" className="icon-link">🔍</a>
                <Link to="/carrito" className="icon-link">🛒</Link> {/* Enlaza al carrito */}
                <a href="#" className="icon-link">👤</a>
            </div>
        </header>
    );
};

export default Header;