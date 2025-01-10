import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import ChatWindow from './components/ChatWindow';
import ImageGenerator from './components/ImageGenerator';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<ChatWindow />} />
          <Route path='image' element={<ImageGenerator />} />
          <Route path='*' element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
