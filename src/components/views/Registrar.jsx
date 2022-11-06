import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Registrar = () => {
  return (
    <Container className="my-5 mainSection">
      <div className="text-center">
        <h1 className="display-4">Registrar nuevo usuario</h1>
        <hr />
      </div>
      <div className="d-flex justify-content-center">
        <Form className="w-form">
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
            type="text"
            placeholder="Ej: Juan"
            ></Form.Control>
            <Form.Text className="text-danger">
              error
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
            type="text"
            placeholder="Ej: Perez"
            ></Form.Control>
            <Form.Text className="text-danger">
              error
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
            type="email"
            placeholder="Ej: Ej: juanperez@gmail.com"
            ></Form.Control>
            <Form.Text className="text-danger">
              error
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
            type="password"
            placeholder="Ej: JuanPe1234"
            ></Form.Control>
            <Form.Text className="text-danger">
              error
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
            type="password"
            placeholder="Ej: JuanPe1234"
            ></Form.Control>
            <Form.Text className="text-danger">
              error
            </Form.Text>
          </Form.Group>
          <Button className="w-100" variant="success" type="submit">
            Registrar
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Registrar;
