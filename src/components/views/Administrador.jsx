import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./receta/ItemReceta";

const Administrador = () => {
  return (
    <Container className="my-5 mainSection">
      <div className="d-flex justify-content-between">
        <h1 className="display-4">Administrar recetas</h1>
        <Link to={'/administrar/agregar'} className="btn btn-primary align-self-center">Agregar receta</Link>
      </div>
      <hr />
      <Table striped bordered responsive hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Ingredientes</th>
            <th>Preparacion</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
