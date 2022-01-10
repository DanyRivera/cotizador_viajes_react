import { useContext } from "react";
import AppContext from "./context/AppContext";
import SeccionesBtn from "./components/SeccionesBtn";
import VuelosSeccion from "./components/VuelosSeccion";
import HospedajesSeccion from "./components/HospedajesSeccion";
import CotizarSeccion from "./components/CotizarSeccion";

function App() {

  const {seccion} = useContext(AppContext);

  return (

      <div className="bg-hero h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center">
        <div className="backdrop-filter backdrop-blur-xl w-full h-screen md:h-auto lg:w-2/3 mx-auto py-9 px-10 rounded-xl shadow-2xl">

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
