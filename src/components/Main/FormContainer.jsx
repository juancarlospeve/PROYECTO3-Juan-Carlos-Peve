import React from "react";
// Gestionar el ciclo de vida y el estado de los componentes
import { useState } from "react";
// Hook personalizado - Obtengo los datos de la api
import useFormContainer from "/src/hooks/useFormContainer";
// Los componentes para armar el formulario
import PropertySelect from "./PropertySelect";
import LocationSelect from "./LocationSelect";
import MetrosInput from "./MetrosInput";
import Button from "./PriceButton";
// Estilos personalizado para el componente
import { QuoteContainer, Center } from "../../css/GlobalStyle";

export default function FormContainer() {
  // Utilizo el hook personalizado para obtener los datos y funciones que necesito
  const { datosPropiedad, datosUbicacion } = useFormContainer();

  // Para obtner los datos que el usuario elija y dárselo a cotización
  const [userPropiedad, setUserPropiedad] = useState({});
  const [metrosCuadrados, setMetrosCuadrados] = useState(20);
  const [userUbicacion, setUserUbicacion] = useState({});

  // Devulevo el formulario armado a la página de inicio
  // Envíos los datos para rellenar los Select y obtengo los elegidos por el usuario
  return (
    <main>
      <QuoteContainer>
        <Center>Complete los datos solicitados</Center>
        <PropertySelect datos={datosPropiedad} userSelect={setUserPropiedad} />
        <LocationSelect datos={datosUbicacion} userSelect={setUserUbicacion} />
        <MetrosInput datos={metrosCuadrados} userSelect={setMetrosCuadrados} />
        <Button
          propiedad={userPropiedad}
          ubicacion={userUbicacion}
          metros2={metrosCuadrados}
        />
      </QuoteContainer>
    </main>
  );
}
