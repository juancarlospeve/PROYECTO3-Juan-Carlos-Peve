// Gestionar el ciclo de vida y el estado de los componentes
import { useState, useEffect } from "react";
// Los hooks personalizados - Fetch y Notificaciones
import useFetch from "./useFetch";
import useNotifications from "./useNotifications";

export default function useFormContainer() {
  // Notificación
  const { alerta } = useNotifications();
  // Para cargar los datos filtrados
  const [datosPropiedad, setDatosPropiedad] = useState([]);
  const [datosUbicacion, setDatosUbicacion] = useState([]);

  // Obtengo de la Api los datos y el estado (cargando, error, ok)
  const { data, status } = useFetch(
    "https://653e6b159e8bd3be29df469f.mockapi.io/data",
    {}
  );

  // Filtro los datos por categoría
  useEffect(() => {
    if (status !== "Loading..." && data) {
      const filteredData = data;
      setDatosPropiedad(
        filteredData.filter((item) => item.categoria === "propiedad")
      );
      setDatosUbicacion(
        filteredData.filter((item) => item.categoria === "ubicacion")
      );
    } else if (status === "Error") {
      alerta(
        "Error inesperado",
        "Se ha producido un error. Intente nuevamente, por favor.",
        "error"
      );
    }
  }, [status, data]);

  // Devulevo datos y funciones
  return {
    datosPropiedad,
    datosUbicacion,
  };
}
