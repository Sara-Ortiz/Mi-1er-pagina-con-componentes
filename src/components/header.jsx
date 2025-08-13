import '../components_style/header.css'

function Header() {
  return (
    <>
        <header>
        <h1>KeyStore</h1>
        <nav>
            <ul className='flex space-x-6'>
            <li><a href='#' className='nav'>Inicio</a></li>
            <li><a href='#' className='nav'>Catálogo</a></li>
            <li><a href='#' className='nav'>Nosotros</a></li>
            <li><a href='#' className='nav'>Contacto</a></li>
            <li><a href='#' className='nav'>🔍</a></li>
            <li><a href='#' className='nav'>🛒</a></li>
            </ul>
        </nav>
        </header>
    </>
    
  );
}

export default Header