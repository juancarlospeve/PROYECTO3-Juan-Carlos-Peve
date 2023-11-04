import Header from "../components/Header/Header";
import FormContainer from "../components/Main/FormContainer";
import Footer from "../components/Footer/Footer";

// Página principal
export default function Home() {
  return (
    <>
      <Header titulo="Seguros para el hogar" icono="🏡" />
      <FormContainer />
      <Footer />
    </>
  );
}
