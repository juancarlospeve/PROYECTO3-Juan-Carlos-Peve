// Necesario para crear enlaces de navegación
import { Link } from "react-router-dom";
// Configuración de las rutas
import { routes } from "../../Routes";
// Estilos personalizado para el componente
import { MainWrapper, Container, Error404 } from "../../css/NotFoundStyle";

export default function NotFound() {
  return (
    <MainWrapper>
      <Container>
        <Error404>
          <h1>4<span>0</span>4</h1>
        </Error404>
        <h2>La página que solicitaste no se pudo encontrar</h2>
        <Link to={routes.home}>
          <button className="button button-outline">Página de inicio</button>
        </Link>
      </Container>
    </MainWrapper>
  );
}
