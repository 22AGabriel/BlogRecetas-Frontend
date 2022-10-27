import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultarAPI } from "../helpers/queries";
import ItemReceta from "./receta/ItemReceta";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setRecetas(respuesta);
    });
  }, []);

  return (
    <Container className="my-5 mainSection">
      <div className="d-flex justify-content-between">
        <h1 className="display-4">Administrar recetas</h1>
        <Link
          to={"/administrar/agregar"}
          className="btn btn-primary align-self-center"
        >
          Agregar receta
        </Link>
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
          {recetas.map((receta) => (
            <ItemReceta key={receta.id} receta={receta}></ItemReceta>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
