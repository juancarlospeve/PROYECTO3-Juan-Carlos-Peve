// Gestionar el ciclo de vida y el estado de los componentes
import { useState, useRef } from "react";
// Hook personalizado - Notificaciones y LocalStorage
import useNotifications from "./useNotifications";
import useStorage from "./useStorage";

export default function usePriceButton() {
  // Inicializar y mostrar el importe calculado
  const [valorPoliza, setValorPoliza] = useState("0.00");
  // Notificación
  const { toast, alerta } = useNotifications();
  // Para cmabiar dinámicamente la clase "ocultar"
  const [mostrarClase, setMostrarClase] = useState(true);
  // Estados para determinar cuando mostrar el gif de carga
  const [mostrarGif, setMostrarGif] = useState(false);

  // Cuando el usuario presiona el boton valido los datos antes de cotizar
  const cotizarClick = (propiedad, ubicacion, metros2) => {
    if (datosCompletos(propiedad, ubicacion, metros2)) {
      cotizo(propiedad, ubicacion, metros2);
    } else {
      alerta(
        "Atención",
        "Debes completar todos los datos en pantalla...",
        "warning"
      );
    }
  };

  // Durante el cálculo muestra un gif de carga
  const cotizo = (propiedad, ubicacion, metros2) => {
    setMostrarGif(true);
    setTimeout(() => {
      const coti = new Cotizador(
        propiedad.value,
        ubicacion.value,
        35.86,
        metros2
      );
      setValorPoliza(coti.cotizarPoliza());
      alerta("", "Cotización realizada con éxito.", "success");
      setMostrarClase(false);
      setMostrarGif(false);
    }, 3000);
  };

  // Clase para calcular el costo de la póliza
  class Cotizador {
    constructor(costoM2, factorPropiedad, factorUbicacion, metros2) {
      this.costoM2 = parseFloat(costoM2);
      this.factorPropiedad = parseFloat(factorPropiedad);
      this.factorUbicacion = parseFloat(factorUbicacion);
      this.metros2 = parseInt(metros2);
    }

    // Cálculo
    cotizarPoliza() {
      let resultado =
        this.costoM2 *
        this.factorPropiedad *
        this.factorUbicacion *
        this.metros2;
      return resultado.toFixed(2);
    }
  }

  // LocalStorage
  const { guardarValor, obtenerValor } = useStorage("localStorage");

  // Cuando el usuario presiona el boton guardar llama a la funcion para utilizar LocalStorage
  const guardarClick = (propiedad, ubicacion, metros2) => {
    guardarEnHistorial(propiedad, ubicacion, metros2);
  };

  // Guarda la información en el LocalStorage para acceder a ella en el historial
  const guardarEnHistorial = (propiedad, ubicacion, metros2) => {
    const cotizacion = {
      fechaCotizacion: new Date().toLocaleString(),
      propiedad: propiedad.label,
      ubicacion: ubicacion.label,
      metrosCuadrados: metros2,
      poliza: valorPoliza,
    };
    const valoresActuales = obtenerValor("historialCotizaciones", false) || [];
    valoresActuales.push(cotizacion);
    guardarValor("historialCotizaciones", valoresActuales);
    setMostrarClase(true);
    toast();
  };

  // Validación de datos
  const datosCompletos = (propiedad, ubicacion, metros2) => {
    return (
      propiedad.value > 0 &&
      ubicacion.value > 0 &&
      metros2 >= 20 &&
      metros2 <= 500
    );
  };

  return { valorPoliza, mostrarGif, cotizarClick, guardarClick, mostrarClase };
}
