export default function MetrosInput({ datos, userSelect }) {
  // Obtengo los datos que el usuario seleciones y lo guardo
  const userSelectMetros = (event) => {
    userSelect(event.target.value);
  };

  // Devuelvo el input correspondiente a los metros cuadrados
  return (
    <>
      <label htmlFor="metros2">Ingrese los Metros cuadrados (entre 20 y 500):</label>
      <input
        type="number"
        id="metros2"
        value={datos}
        min="20"
        max="500"
        onChange={userSelectMetros}
        required
      />
    </>
  );
}
