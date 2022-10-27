import { Button, Col, Container, Form, Row } from "react-bootstrap";

const EditarReceta = () => {
  return (
    <Container className="my-5 mainSection">
      <div className="text-center">
        <h1 className="display-4">editar receta</h1>
        <hr />
      </div>
      <Form>
        <Form.Group>
          <Form.Label className="mt-3">Nombre receta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Tarta de queso"
          ></Form.Control>
          <Form.Text className="text-danger">error</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">Ingredientes</Form.Label>
          <Form.Control
            type="textarea"
            as="textarea"
            placeholder=" 1° ingrediente
          2° Ingrediente..."
          ></Form.Control>
          <Form.Text className="text-danger">error</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">Preparación</Form.Label>
          <Form.Control
            type="textarea"
            as="textarea"
            placeholder=" 1° paso
          2° paso..."
          ></Form.Control>
          <Form.Text className="text-danger">error</Form.Text>
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="mt-3">Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://assets.unileversolutions.com/recipes-v2/38503.jpg"
              ></Form.Control>
              <Form.Text className="text-danger">error</Form.Text>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="mt-3">Categoria</Form.Label>
              <Form.Select>
                <option value="">Elige una categoria</option>
                <option value="Dulce">Dulce</option>
                <option value="Salado">Salado</option>
              </Form.Select>
              <Form.Text className="text-danger">error</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" className="w-100 my-4" variant="success">
          Agregar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarReceta;
