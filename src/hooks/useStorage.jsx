export default function useStorage(tipo) {
  // Método para guardar datos en el localStorage o sessionStorage
  const guardarValor = (clave, valor) => {
    if (valor === null || valor === undefined) return;

    const parsedItem =
      typeof valor !== "string" ? JSON.stringify(valor) : valor;

    return tipo === "localStorage"
      ? localStorage.setItem(clave, parsedItem)
      : sessionStorage.setItem(clave, parsedItem);
  };

  // Método para obtener los datos del localStorage o sessionStorage
  const obtenerValor = (clave, esString) => {
    sessionStorage;

    const data =
      tipo === "localStorage"
        ? localStorage.getItem(clave)
        : sessionStorage.getItem(clave);

    return esString ? data : JSON.parse(data);
  };

  // Método para limpiar los datos asociados a una clave
  const limpiarLocalStorage = (clave) => {
    localStorage.removeItem(clave);
  };

  return { guardarValor, obtenerValor, limpiarLocalStorage };
}
