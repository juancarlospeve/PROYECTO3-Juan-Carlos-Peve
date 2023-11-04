// Estilos personalizado para el componente
import { HeaderWrapper } from "../../css/HeaderStyle";

export default function Header({ titulo, icono }) {
  return (
    <HeaderWrapper>
      <h1>{titulo}</h1>
      <h1>{icono}</h1>
    </HeaderWrapper>
  );
}
