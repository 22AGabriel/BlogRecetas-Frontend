import { Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";

const Inicio = () => {
    return (
        <Container className="my-5 mainSection">
            <div className="text-center mb-5">
              <h1>Blog de recetas</h1>
            </div>
            <Row>
                <CardReceta></CardReceta>
                <CardReceta></CardReceta>
                <CardReceta></CardReceta>
                <CardReceta></CardReceta>
            </Row>
        </Container>
    );
};

export default Inicio;