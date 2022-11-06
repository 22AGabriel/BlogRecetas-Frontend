import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({receta}) => {
  const {_id, nombreReceta, imagen} = {...receta}

  return (
    <Col sm={12} md={4} lg={3} className="my-2 cardGrilla">
      <Link to={`/detalle/${_id}`} className='text-decoration-none text-dark text-center'>
        <Card>
          <Card.Img variant='top' className="imgGrilla" src={imagen}></Card.Img>
          <Card.Body>
            <Card.Title>{nombreReceta}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CardReceta;