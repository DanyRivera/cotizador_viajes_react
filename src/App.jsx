import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";
import SeccionesBtn from "./components/SeccionesBtn";
import VuelosSeccion from "./components/VuelosSeccion";
import HospedajesSeccion from "./components/HospedajesSeccion";
import CotizarSeccion from "./components/CotizarSeccion";

function App() {

  const { seccion, values, setVuelo, setHospedaje, setValues } = useContext(AppContext);

  useEffect(() => {


    if (Object.keys(values).length == 7) {
      setVuelo(values);
    }

    if (Object.keys(values).length == 5) {
      setHospedaje(values);
    }

    setValues({});

  }, [seccion])

  return (

    <div className="bg-hero h-160 md:h-screen bg-cover bg-center flex flex-col justify-center">
      <div className="backdrop-filter backdrop-blur-xl w-full h-160 md:h-auto lg:w-2/3 mx-auto py-9 px-10 rounded-xl shadow-2xl">

        <SeccionesBtn />

        <div className="mt-8">

          {seccion === 'Vuelos' && <VuelosSeccion />}
          {seccion === 'Hospedajes' && <HospedajesSeccion />}
          {seccion === 'Cotizacion' && <CotizarSeccion />}

        </div>

      </div>
    </div>

  )
}

export default App
