import '../components_style/header.css'

function Header() {
  return (
    <>
      <header className="main-header">
        <h1 className="logo">Piedra Viva ☽</h1>
        
        <nav className="main-nav">
          <a href="#">Inicio</a>
          <a href="#">Colección</a>
          <a href="#">Anillos</a>
          <a href="#">Acerca de</a>
        </nav>

        <div className="header-icons">
          <a href="#" className="icon-link">🔍</a>
          <a href="#" className="icon-link">🛒</a>
          <a href="#" className="icon-link">👤</a>
        </div>
      </header>

    </>
    
  );
}

export default Header