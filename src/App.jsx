import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './components/views/Inicio';
import Administrador from './components/views/Administrador';
import DetalleReceta from './components/views/DetalleReceta';
import Error404 from './components/views/Error404';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Inicio/>} />
        <Route exact path='/administrar' element={<Administrador/>} />
        <Route exact path='/detalle' element={<DetalleReceta/>} />
        <Route exact path='*' element={<Error404/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
