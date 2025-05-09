import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import ConsultasUsuarios from './components/ConsultasUsuarios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InstagramCard from './components/State';
import Menu from './components/Menu';
import Error from './components/Error';
import PostForm from './components/PostForm';
import PutForm from './components/PutForm';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<ConsultasUsuarios />} />
        <Route path="/probando" element={<InstagramCard />} />
        <Route path="/crear" element={<PostForm />} />
        <Route path="/actualizar/:id" element={<PutForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
