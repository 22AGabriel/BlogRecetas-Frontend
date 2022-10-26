import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = () => {
  return (
    <Col sm={12} md={4} lg={3} className="my-2 cardGrilla">
      <Link to={'/detalle'} className='text-decoration-none text-dark text-center'>
        <Card>
          <Card.Img variant='top' src={'https://cwnoticias.com/download/multimedia.normal.8a73efa2d830f245.70726570697a7a615f6e6f726d616c2e6a7067.jpg'}></Card.Img>
          <Card.Body>
            <Card.Title>Prepizza</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CardReceta;