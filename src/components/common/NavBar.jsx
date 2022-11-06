import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Blog de Recetas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className={"nav-item nav-link"}>
                Inicio
              </NavLink>
              <NavLink to="/administrar" className={"nav-item nav-link"}>
                Administrador
              </NavLink>
              <NavLink to="/administrar/registrar" className={"nav-item nav-link"}>
                Registrar
              </NavLink>
              <NavLink to="/administrar/login" className={"nav-item nav-link"}>
                Iniciar sesión
              </NavLink>
              <Button variant="dark" className={"me-auto px-2"}>
                Cerrar sesión
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
