// Para crear componentes con estilos personalizados
import styled from "styled-components";

// Estilos para el boton eliminar
export const DeleteButton = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  height: 3.8rem;
  margin: 0;
  &:hover {
    background-color: transparent !important;
  }
`;
