export default function Select2({ datos, userSelect }) {
  // Obtengo los datos que el usuario seleciones y lo guardo
  const userSelectUbicacion = (event) => {
    const index = event.target.selectedIndex;
    const label = event.target[index].text;
    const value = event.target.value;
    userSelect({ value: value, label: label });
  };

  // Devuelvo el Select correspondiente a la ubicación
  return (
    <>
      <label htmlFor="ubicacion">Seleccione su ubicación</label>
      <select id="ubicacion" defaultValue="" onChange={userSelectUbicacion}>
        <option value="" disabled>
          ...
        </option>
        {datos.map((ubicacion) => (
          <option key={ubicacion.id} value={ubicacion.factor}>
            {ubicacion.tipo}
          </option>
        ))}
      </select>
    </>
  );
}
