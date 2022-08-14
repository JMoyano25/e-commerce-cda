import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import CartProvider from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
