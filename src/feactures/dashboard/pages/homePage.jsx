import React from 'react';
import Header from '../../shared/components/header.jsx';
import Footer from '../../shared/components/footer.jsx';
import './homePage.css'

const HomePage = () => {
  return (
    <div>
      <Header />

      <main className="homepage">
        {/* Sección Principal (Hero) */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Joyería que nace de la Tierra</h1>
            <p className="hero-subtitle">Diseños únicos forjados con la esencia de lo natural</p>
            <button className="cta-button">Explora la colección</button>
          </div>
        </section>

        {/* Sección de la historia de la marca */}
        <section className="our-story-section">
          <div className="story-content">
            <h2 className="section-title">Hecho a mano, con el corazón</h2>
            <p>En Piedra Viva, cada pieza es una obra de arte. Utilizamos técnicas artesanales y materiales de alta calidad para crear joyas que celebran la belleza de la naturaleza y la esencia de lo auténtico. Cada diseño cuenta una historia, esperando ser parte de la tuya.</p>
          </div>
        </section>

        {/* Sección del llamado a la acción (Newsletter) */}
        <section className="newsletter-section">
          <h2 className="section-title">Únete a la comunidad Piedra Viva</h2>
          <p>Sé el primero en ver nuestras nuevas piezas y recibe ofertas exclusivas.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Introduce tu correo electrónico" className="newsletter-input" />
            <button type="submit" className="newsletter-button">Suscribirse</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;