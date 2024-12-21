import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './components/Cart';
import { cartItems } from './utils/cartItems';
import Cart2 from './components/Cart2';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='store' element={<ProductList />} />
          <Route path='products/:productId' element={<Product />} />
          {/* <Route path='cart' element={<Cart cartItems={cartItems} />} /> */}
          <Route path='cart' element={<Cart2 />} />

          {/* NOTFOUND */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
