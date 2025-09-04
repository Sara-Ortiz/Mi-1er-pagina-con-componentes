// import React from 'react';
// import './App.css'; 
// import HomePage from './feactures/dashboard/pages/homePage';


// function App() {
//   return (
//     <>
//       <div className="App">
//         <HomePage />
//       </div>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

// Importa tus componentes de página
import HomePage from './feactures/dashboard/pages/homePage.jsx';
import ProductsPage from './feactures/products/productsPage.jsx';
import CartPage from './feactures/cart/cartPage.jsx'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Aquí defines las rutas para cada componente de página */}
          <Route path="/" element={<HomePage />} />
          <Route path="/coleccion" element={<ProductsPage />} />
          <Route path="/carrito" element={<CartPage />} /> {/* Nueva ruta para el carrito */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
