import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ usuarioIniciado, setUsuarioIniciado }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("usuarioLogueado");
    setUsuarioIniciado({});
    navigate("/");
  };

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
              {usuarioIniciado.email ? (
                <>
                  <NavLink to="/administrar" className={"nav-item nav-link"}>
                    Administrador
                  </NavLink>
                  <NavLink to="/administrar/registrar" className={"nav-item nav-link"}>
                    Registrar
                  </NavLink>
                  <Button variant="dark" className={"me-auto px-2"} onClick={logout}>
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <NavLink to="/administrar/login" className={"btn bg-light text-dark border-0 me-auto px-2"}>
                  Iniciar sesión
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
