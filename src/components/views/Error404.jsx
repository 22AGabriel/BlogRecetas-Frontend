import { Container } from "react-bootstrap";

const Error404 = () => {
    return (
        <Container className="my-5 mainSection d-flex flex-column align-items-center justify-content-center">
            <img className="w-75" src="https://img.freepik.com/vector-gratis/error-404-ilustracion-concepto-paisaje_114360-7898.jpg?w=2000" alt="error 404" />
            <p className="fs-1">NO FOUND</p>
        </Container>
    );
};

export default Error404;