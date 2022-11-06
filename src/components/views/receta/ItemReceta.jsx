import { Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaAPI, consultarAPI } from "../../helpers/queries";

const ItemReceta = ({receta, setRecetas}) => {
    const {_id, nombreReceta, imagen, ingredientes, preparacion, categoria} = {...receta}

    const borrarProducto = () => {
      Swal.fire({
        title: 'Eliminar Receta',
        text: `¿Estás seguro de eliminar ${nombreReceta}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        CancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed){
          borrarRecetaAPI(_id).then((respuesta) => {
            if(respuesta.status === 200){
              Swal.fire('Receta eliminada', "La receta fue correctamente eliminada", 'success')
              consultarAPI().then((listaRecetas) => {
                setRecetas(listaRecetas)
              })
            } else {
              Swal.fire('Ocurrió un error', 'Inténtelo nuevamente en unos minutos', 'error')
            }
          })
        }
      })
    }

  return (
    <tr>
      <td className="text-truncate tamaño">{_id}</td>
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
          <Link className="btn bg-warning me-1" to={`/administrar/editar/${_id}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" onClick={borrarProducto}>
            <i className="bi bi-trash text-dark"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
