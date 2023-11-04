// Permite definir las rutas de navegación de la aplicación React
import { Link } from "react-router-dom";
// Configuración de las rutas
import { routes } from "../../Routes";
// Estilos personalizado para el componente
import { Center } from "../../css/GlobalStyle";

export default function Button() {
  // Devuelvo el botón para mostrarlo en la tabla
  return (
    <Center>
      <Link to={routes.home}>
        <button className="button button-outline">VOLVER</button>
      </Link>
    </Center>
  );
}
