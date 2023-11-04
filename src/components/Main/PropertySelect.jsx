export default function Select({ datos, userSelect }) {
  // Obtengo los datos que el usuario seleciones y lo guardo
  const userSelectPropiedad = (event) => {
    const index = event.target.selectedIndex;
    const label = event.target[index].text;
    const value = event.target.value;
    userSelect({ value: value, label: label });
  };

  // Devuelvo el Select correspondiente a la propiedad
  return (
    <>
      <label htmlFor="propiedad">Seleccione el tipo de propiedad</label>
      <select id="propiedad" defaultValue="" onChange={userSelectPropiedad}>
        <option value="" disabled>
          ...
        </option>
        {datos.map((propiedades) => (
          <option key={propiedades.id} value={propiedades.factor}>
            {propiedades.tipo}
          </option>
        ))}
      </select>
    </>
  );
}
