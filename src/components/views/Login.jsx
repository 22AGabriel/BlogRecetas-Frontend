import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../helpers/queries";

const Login = ({setUsuarioIniciado}) => {
  const {register, handleSubmit, setError, formState: { errors }} = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data).then((respuesta) => {
        if(respuesta){
            localStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
            setUsuarioIniciado(respuesta)
            navigate("/");
        } else {
            setError("email", {message: "Email o contraseña incorrecta, intenta nuevamente"})
        }
    })
  }

  return (
    <Container className="my-5 mainSection">
      <div className="text-center">
        <h1 className="display-4">Iniciar sesíon</h1>
        <hr />
      </div>
      <div className="d-flex justify-content-center">
        <Form noValidate onSubmit={handleSubmit(onSubmit)} className="w-form">
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
                },
              })}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              {...register("password", {
                required: true,
              })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.email?.message}
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
