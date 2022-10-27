import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemReceta = ({receta}) => {
    const {id, nombreReceta, imagen, ingredientes, preparacion, categoria} = {...receta}

  return (
    <tr>
      <td>{id}</td>
      <td>{nombreReceta}</td>
      <td>
        <Accordion defaultActiveKey="0">
          <Accordion.Item aventkey="1">
            <Accordion.Header bg="warning">Ver</Accordion.Header>
            <Accordion.Body>
             {ingredientes}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </td>
      <td>
        <Accordion defaultActiveKey="0">
          <Accordion.Item aventkey="1">
            <Accordion.Header>Ver</Accordion.Header>
            <Accordion.Body>
            {preparacion}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </td>
      <td className="text-truncate tamaño">
        {imagen}
      </td>
      <td>{categoria}</td>
      <td>
        <div className="d-flex">
          <Link className="btn bg-warning me-1" to={`/administrar/editar/${id}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger">
            <i className="bi bi-trash text-dark"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
