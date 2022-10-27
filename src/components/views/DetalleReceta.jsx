import { Breadcrumb, Badge, Card, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleReceta = () => {
  return (
    <Container className="my-4 mainSection">
      <Breadcrumb>
        <Link to={"/"} className="text-decoration-none mx-2">Inicio</Link>
        <p> - </p>
        <Link to={"*"} className="text-decoration-none mx-2">categoria</Link>
        <p> - </p>
        <Link to={"/detalle"} className="mx-2">Nombre de receta</Link>
      </Breadcrumb>
      <div className="text-center">
        <h1>Nombre receta</h1>
      </div>
      <div className="my-3 d-flex flex-column">
        <img className="w-100 imgDetalle rounded " src="https://cwnoticias.com/download/multimedia.normal.8a73efa2d830f245.70726570697a7a615f6e6f726d616c2e6a7067.jpg" alt="" />
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>Ingredientes</Card.Title>
              <Badge bg="success" className="mb-3">
                categoria
              </Badge>
            </div>
            <Card.Text>-400gr de Harina. -100 Gramos Harina Integral. -Súper Fina. -100 Gramos Salvado Grueso. -50 Gramos Levadura Fresca. -2 Cucharadas Aceite De Oliva. -1 Cubo Caldo De Verduras Maggi. -1/2 Taza Agua Tibia</Card.Text>
            <hr />
            <Card.Title>Preparación</Card.Title>
            <Card.Text>-Mezclar en un bol amplio las harinas y el salvado. Realizar un hueco en el centro y desgranar allí la levadura. -Incorporar el aceite de oliva, el cubito de Caldo de Verduras MAGGI triturado y unir con el agua tibia necesaria para formar una masa tierna y elástica que no se pegue en las manos. -Tapar y dejar leudar en un lugar templado hasta que duplique su volumen. -Dividir la masa en 2 bollos. Lubricar 2 pizzeras de 26 cm de diámetro y estirar el bollo con ayuda de las manos hasta que quede bien finita. -Precocinar en horno bien caliente durante 10 minutos. Hasta que haga piso. Reservar. -Se pueden freezar las prepizzas en bolsas adecuadas con un poco de aire en el interior durante 3 meses. -Disponer sobre una prepizza 200 g de mozzarella rallada y llevar a un horno caliente hasta que se derrita. Colocar encima 3 tomates cortados en octavos y 50 g de pavita (fiambre) o jamón cocido magro. Hornear 5 minutos más. Retirar. Cubrir con 100 g de rúcula, rociar con 1 cucharada de aceite de oliva y esparcir 50 g de hojuelas de queso parmesano. -Cortar 1 puerro, 2 cebollas grandes, 1 pimiento rojo, en juliana. Cocinarlos al vapor hasta que estén al dente. Disponer sobre una prepizza 250 g de mozzarella rallada, los vegetales al vapor, 50 g de aceitunas fileteadas y 50 g de queso parmesano rallado. Cocinar en horno caliente hasta que los quesos se derritan. Retirar y espolvorear con 2 cucharadas de hierbas. -TIP: La pizza les gusta a grandes y chicos, por eso es una buena idea para agasajar a tu familia. Serví porciones más chicas a los niños y enseñales a acompañarla con una ensalada colorida. Porque sus requerimientos nutricionales son menores y los hábitos que se adquieren en la infancia duran para toda la vida.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default DetalleReceta;
