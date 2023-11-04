// Para crear componentes con estilos personalizados
import styled from "styled-components";

// Estilos para el contenedor del formulario
export const QuoteContainer = styled.div`
  margin: auto;
  max-width: 900px;
  background-color: white;
  padding: 10px;
  border-color: whitesmoke;
  box-shadow: 26px 28px 15px -8px rgba(0, 0, 0, 0.15);
  text-align: center;

  @media (min-width: 768px) {
    /* Laptop */
    border-radius: 0.7rem;
  }
`;

// Estilos para el título de tipo h2
export const Center = styled.h2`
  text-align: center;
  margin: 20px;
`;

// Estilos para el importe
export const Importe = styled.p`
  letter-spacing: 0.1rem;
  color: blueviolet;
  font-size: x-large;
  font-weight: 700;
`;

// Estilos para el boton guardar
export const Guardar = styled.span`
  margin-left: 20px;
  font-size: xx-large;
  cursor: pointer;
`;
