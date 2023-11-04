// Sweet Alert
import Swal from "sweetalert2";
// Tastify js + CSS predeterminado
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function useNotifications() {
  //Notificaciones de SeetAlert
  const alerta = (titulo, mensaje, icono) => {
    Swal.fire({
      icon: icono || "",
      title: titulo || "",
      text: mensaje,
      showConfirmButton: false,
      timer: 3500,
      width: "240px",
    });
  };

  // Notificaciones de Toastify
  const toast = () => {
    Toastify({
      text: "Cotización guardada.",
      duration: 3000,
      newWindow: true,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  };

  return { toast, alerta };
}
