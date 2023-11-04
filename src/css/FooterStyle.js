// Para crear componentes con estilos personalizados
import styled from "styled-components";

// Estilos para el footer
export const FooterWrapper = styled.footer`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 0.3rem;
  margin: 5rem 0.5rem 0;

  @media (min-width: 768px) {
    /* Laptop */
    font-size: 1.6rem;
  }
`;
