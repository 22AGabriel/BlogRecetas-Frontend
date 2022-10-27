import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AgregarReceta = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Container className="my-5 mainSection">
      <div className="text-center">
        <h1 className="display-4">Agregar receta</h1>
        <hr />
      </div>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label className="mt-3">Nombre receta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Tarta de queso"
            {...register('nombreReceta', {
              required: 'El nombre de la receta es un dato obligatorio',
              minLength: {
                value: 5, 
                message: 'La cantidad mínima de caracteres debe ser 5'
              },
              maxLength: {
                value: 100,
                message: 'La cantidad máxima de caracteres es de 100'
              }
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">Ingredientes</Form.Label>
          <Form.Control 
          type="textarea" 
          as="textarea" 
          placeholder=" 1° ingrediente
          2° Ingrediente..."
          {...register('ingredientes', {
            required: 'Ingresa los ingredientes de la receta',
            minLength: {
              value: 20, 
              message: 'La cantidad mínima de caracteres debe ser 20'
            }
          })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">Preparación</Form.Label>
          <Form.Control 
          type="textarea" 
          as="textarea"
          placeholder=" 1° paso
          2° paso..."
          {...register('preparacion', {
            required: 'Ingresa los pasos de la receta',
            minLength: {
              value: 30, 
              message: 'La cantidad mínima de caracteres debe ser 30'
            }
          })}
          ></Form.Control>
          <Form.Text className="text-danger">
          {errors.preparacion?.message}
          </Form.Text>
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="mt-3">Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://assets.unileversolutions.com/recipes-v2/38503.jpg"
                {...register('imagen', {
                  required: 'La URL de la imagen es obligatoria',
                  pattern: {
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: 'Debe ingresar una URL válida'
                  }
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="mt-3">Categoria</Form.Label>
              <Form.Select
              {...register('categoria', {
                required: 'Debe seleccionar una categoría'
              })}>
                <option value="">Elige una categoria</option>
                <option value="Dulce">Dulce</option>
                <option value="Salado">Salado</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" className="w-100 my-4" variant="success">
          Agregar receta
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarReceta;