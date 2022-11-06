import { useEffect, useState } from "react";
import { Breadcrumb, Badge, Card, Container} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { obtenerRecetaAPI } from "../helpers/queries";

const DetalleReceta = () => {
  const [receta, setReceta] = useState("")
  const {id} = useParams();

  useEffect(() => {
    obtenerRecetaAPI(id).then((respuesta) => {
      if(respuesta.status === 200){
        setReceta(respuesta.dato)
      }
    })
  }, [])

  return (
    <Container className="my-4 mainSection">
      <Breadcrumb>
        <Link to={"/"} className="text-decoration-none mx-2">Inicio</Link>
        <p> - </p>
        <Link to={"*"} className="text-decoration-none mx-2">{receta.categoria}s</Link>
        <p> - </p>
        <Link to={`/detalle/${id}`} className="mx-2">{receta.nombreReceta}</Link>
      </Breadcrumb>
      <div className="text-center">
        <h1>{receta.nombreReceta}</h1>
      </div>
      <div className="my-3 d-flex flex-column">
        <img className="w-100 imgDetalle rounded " src={receta.imagen} alt="" />
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>Ingredientes</Card.Title>
              <Badge bg="success" className="mb-3">
                {receta.categoria}
              </Badge>
            </div>
            <Card.Text>{receta.ingredientes}</Card.Text>
            <hr />
            <Card.Title>Preparación</Card.Title>
            <Card.Text>{receta.preparacion}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default DetalleReceta;
