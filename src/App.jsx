
import './App.css'; 
import Header from './components/header';
import ProductSection from './components/products'; 
import Footer from './components/footer';

import productsData from './dataJSON/productsData.json'; 

function App() {
  return (
    <>
      <Header/>
      <ProductSection productsData={productsData} />
      <Footer /> 
    </>
  );
}

export default App;