import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registrar = () => {
  const {register, handleSubmit, formState: { errors }, watch, reset} = useForm();
  const password = watch('password');

  const onSubmit = (data) => {
    delete data.confirmPassword;
    console.log(data)
  }
    
  return (
    <Container className="my-5 mainSection">
      <div className="text-center">
        <h1 className="display-4">Registrar nuevo usuario</h1>
        <hr />
      </div>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit(onSubmit)} className="w-form">
        <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Ej: Juan"
            {...register("nombre", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 3,
                message: "Ingresa un nombre válido"
              }
            })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Ej: Perez"
            {...register("apellido", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 3,
                message: "Ingresa un apellido válido"
              }
            })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.apellido?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email"
            placeholder="Ej: Ej: juanperez@gmail.com"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: "Debes ingresar un email válido",
              }
            })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
            type="password"
            placeholder="Ej: JuanPe1234"
            {...register("password", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "Entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula, al menos una minúscula y NO puede tener otros símbolos.",
              },
            })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control 
            type="password"
            placeholder="Ej: JuanPe1234"
            {...register("confirmPassword", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "Entre 8 y 16 caracteres, al menos un dígito, al menos una mayúscula, al menos una minúscula y NO puede tener otros símbolos.",
              },
              validate: (value) =>
              value === password || "Las contraseñas no coinciden"
            })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.rePassword?.message}
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
