// Permite definir las rutas de navegación de la aplicación React
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Configuración de las rutas
import { routes } from "./Routes";
// Ubicación de las páginas de la aplicación
import Home from "./pages/Home";
import History from "./pages/History";
import PageNotFound from "./pages/PageNotFound";
// Milligram
import "milligram";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.history} element={<History />} />
          <Route path={routes.pageNotFound} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
