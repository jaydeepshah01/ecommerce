import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';
import Routes from './routes';

export default function App() {
  return (
    <HelmetProvider>
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </ProductsContextProvider>
  </HelmetProvider>
  );
}
