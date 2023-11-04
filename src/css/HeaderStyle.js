// Para crear componentes con estilos personalizados
import styled from "styled-components";

// Estilos para el encabezado
export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 15px;

  // Estilos para el título del encabeado
  h1 {
    font-size: 4rem;
    font-weight: 400;
    color: white;

    // Media Query para h1
    @media (min-width: 460px) {
      /* Tablets */
      font-size: 5rem;
    }

    @media (min-width: 768px) {
      /* Laptop */
      font-size: 6rem;
    }
  }
`;
