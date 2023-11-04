// Los componentes para armar la tabla
import Table from "./Table";
import Button from "./Button";
// Estilos personalizado para el componente
import { QuoteContainer } from "../../css/GlobalStyle";

export default function TableContainer() {
  return (
    <main>
      <QuoteContainer>
        <Table />
        <Button />
      </QuoteContainer>
    </main>
  );
}
