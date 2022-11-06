import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './components/views/Inicio';
import Administrador from './components/views/Administrador';
import DetalleReceta from './components/views/DetalleReceta';
import AgregarReceta from './components/views/receta/AgregarReceta';
import EditarReceta from './components/views/receta/EditarReceta';
import Error404 from './components/views/Error404';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Registrar from './components/views/Registrar';
import Login from './components/views/Login';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Inicio/>} />
        <Route exact path='/administrar' element={<Administrador/>} />
        <Route exact path='/detalle/:id' element={<DetalleReceta/>} />
        <Route exact path='/administrar/agregar' element={<AgregarReceta/>}/>
        <Route exact path='/administrar/login' element={<Login/>}/>
        <Route exact path='/administrar/registrar' element={<Registrar/>}/>
        <Route exact path='/administrar/editar/:id' element={<EditarReceta/>}/>
        <Route exact path='*' element={<Error404/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
