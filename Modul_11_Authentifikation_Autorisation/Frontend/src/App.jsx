import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Books from './pages/Books';
// import { useContext } from 'react';
// import { AuthContext } from './contexts/AuthContext';
import ProtectedLayout from './layouts/ProtectedLayout';
// import ReadingList from './pages/ReadingList';

const ReadingList = lazy(() => import('./pages/ReadingList'));

function App() {
  // const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='signup' element={<Signup />} />
        {/* <Route path='books' element={isAuthenticated ? <Books /> : <Navigate to={'/signup'} />} /> */}

        <Route element={<ProtectedLayout />}>
          <Route path='books' element={<Books />} />
          <Route
            path='reading-list'
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ReadingList />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
