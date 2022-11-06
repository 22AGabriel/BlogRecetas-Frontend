import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="my-5 mainSection">
      <div className="text-center">
        <h1 className="display-4">Iniciar sesíon</h1>
        <hr />
      </div>
      <div className="d-flex justify-content-center">
        <Form noValidate className="w-form">
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
            ></Form.Control>
            <Form.Text className="text-danger">
              error
            </Form.Text>
          </Form.Group>
          <Button className="w-100" variant="success" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
