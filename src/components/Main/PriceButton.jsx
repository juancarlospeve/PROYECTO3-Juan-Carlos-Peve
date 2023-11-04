import  gif from "../../assets/img/Dual.gif"
import React from "react";
// Hook personalizado - Para realizar cálculos y guardar datos
import useButtonLogic from "../../hooks/usePriceButton";
// Permite definir las rutas de navegación de la aplicación React
import { Link } from "react-router-dom";
// Configuración de las rutas
import { routes } from "../../Routes";
// Estilos personalizado para el componente
import { Center, Importe, Guardar } from "../../css/GlobalStyle";

export default function PriceButton({ propiedad, ubicacion, metros2 }) {
  // Utilizo el hook personalizado para obtener los datos y funciones que necesito
  const { valorPoliza, mostrarGif, cotizarClick, guardarClick, mostrarClase } =
    useButtonLogic();

  // Devuelvo los datos a mostrar en pantalla
  return (
    <>
      <Center>
        {mostrarGif ? (
          <img src={gif} alt="Cargando..." width="50px" />
        ) : (
          <button
            className="button button-outline"
            onClick={() => cotizarClick(propiedad, ubicacion, metros2)}
          >
            Cotizar
          </button>
        )}
      </Center>
      <Center>
        <Importe>
          Precio estimado: $ <span>{valorPoliza}</span>
          <Guardar
            className={mostrarClase ? "ocultar" : ""}
            title="Guardar en historial"
            onClick={() => guardarClick(propiedad, ubicacion, metros2)}
          >
            💾
          </Guardar>
        </Importe>
        <Link to={routes.history}>
          <button className="button button-outline">Ir al historial</button>
        </Link>
      </Center>
    </>
  );
}
