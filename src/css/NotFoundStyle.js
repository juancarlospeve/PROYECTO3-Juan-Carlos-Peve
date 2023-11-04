// Para crear componentes con estilos personalizados
import styled from "styled-components";

// Estilos para el contenido principal
export const MainWrapper = styled.main`
  position: relative;
  height: 100vh;
`;

// Estilos para el contenedor principal
export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  padding: 11rem 0.5rem;
  text-align: center;
  background: #fff;

  // Estilos para la descripción
  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #151515;
    margin-top: 0;
    margin-bottom: 2.5rem;

    // Media Query para h2
    @media (min-width: 460px) {
      /* Tablets */
      font-size: 2.2rem;
    }
  }
  // Media query para el contenedor principal
  @media (min-width: 768px) {
    /* Laptop */
    padding: 11rem 4rem;
    border-radius: 10px;
  }
`;

// Estilos para el contendor secundario
export const Error404 = styled.div`
  position: relative;
  height: 180px;

  // Estilos para el título
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12rem;
    font-weight: 700;
    margin: 0;
    color: #262626;
    text-transform: uppercase;

    // Media Query para h1
    @media (min-width: 460px) {
      /* Tablets */
      font-size: 14.1rem;
    }

    @media (min-width: 768px) {
      /* Laptop */
      font-size: 16.5rem;
    }
  }
  // Estilo para el número
  span {
    color: blueviolet;
  }
`;
