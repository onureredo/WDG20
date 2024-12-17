import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './pages/Home';
import MainLayout from './pages/MainLayout';
import Dashboard from './components/Nested Routes/Dashboard';
import Profil from './components/Nested Routes/Profil';
import Settings from './components/Nested Routes/Settings';
import NotFound from './components/NotFound';
import ProductList from './components/Dynamic Routes/ProductList';
import Product from './components/Dynamic Routes/Product';
import Welcome from './components/Navigate/Welcome';
import Goodbye from './components/Navigate/Goodbye';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='welcome' element={<Welcome />} />
          <Route path='goodbye' element={<Goodbye />} />

          {/* NESTED ROUTES */}
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='dashboard/profil' element={<Profil />} />
          <Route path='dashboard/settings' element={<Settings />} />

          {/* DYNAMIC ROUTES */}
          <Route path='products' element={<ProductList />} />
          <Route path='products/:productId' element={<Product />} />

          {/* NOT FOUND */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
