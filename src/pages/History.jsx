import Header from "../components/Header/Header";
import TableContainer from "../components/History/TableContainer";
import Footer from "../components/Footer/Footer";

// Página para ver el historial
export default function History() {
  return (
    <>
      <Header titulo="Últimas cotizaciones" icono="📋" />
      <TableContainer />
      <Footer />
    </>
  );
}
