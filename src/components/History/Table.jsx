// Gestionar el ciclo de vida y el estado de los componentes
import { useState } from "react";
// Hook personalizado - LocalStorage
import useStorage from "../../hooks/useStorage";
// Estilos personalizado para el componente
import { DeleteButton } from "../../css/TableStyle";

export default function Table() {
  const { obtenerValor, guardarValor, limpiarLocalStorage } =
    useStorage("localStorage");

  // Obtengo el valor del historial de cotizaciones
  const storedData = obtenerValor("historialCotizaciones", false);
  const [valores, setValores] = useState(storedData || []);

  // Limpia el localStorage correspondiente a la clave y actualiza la tabla
  const borrarHistorial = () => {
    limpiarLocalStorage("historialCotizaciones");
    setValores([]);
  };

  // Elimina un solo elemento, actualiza el LocalStore y la tabla
  const eliminarCotización = (index) => {
    const nuevosValores = [...valores];
    nuevosValores.splice(index, 1);
    guardarValor("historialCotizaciones", nuevosValores);
    setValores(nuevosValores);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Fecha de cotización</th>
            <th>Propiedad</th>
            <th>Ubicación</th>
            <th>Metros cuadrados</th>
            <th>Póliza mensual</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {valores?.length > 0 ? (
            valores.map((cotizacion, index) => (
              <tr key={index}>
                <td>{cotizacion.fechaCotizacion}</td>
                <td>{cotizacion.propiedad}</td>
                <td>{cotizacion.ubicacion}</td>
                <td>{cotizacion.metrosCuadrados}</td>
                <td>$ {cotizacion.poliza}</td>
                <td>
                  <DeleteButton onClick={() => eliminarCotización(index)}>
                    ❌
                  </DeleteButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Aquí</td>
              <td>verás</td>
              <td>las</td>
              <td>cotizaciones</td>
              <td>realizadas</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="button button-clear" onClick={borrarHistorial}>
        BORRAR HISTORIAL
      </button>
    </>
  );
}
