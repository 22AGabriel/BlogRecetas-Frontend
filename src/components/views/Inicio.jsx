import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import CardReceta from "./receta/CardReceta";

const Inicio = () => {
    const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setRecetas(respuesta);
    });
  }, []);

    return (
        <Container className="my-5 mainSection">
            <div className="text-center mb-5">
              <h1>Blog de recetas</h1>
            </div>
            <Row>
              {
                recetas.map((receta) => (<CardReceta key={receta._id} receta={receta}></CardReceta>))
              }
            </Row>
        </Container>
    );
};

export default Inicio;