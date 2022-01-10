import { useContext } from "react";
import AppContext from "../context/AppContext";

const BtnSecciones = () => {

  const { seccion, setSeccion } = useContext(AppContext);

  const secciones = ['Vuelos', 'Hospedajes', 'Cotizacion'];

  return (
    <div className="flex justify-center">

      <div className="bg-white divide-none border-none text-center w-full lg:w-auto flex justify-center flex-col md:flex-row">

        {secciones.map(seccionArr => (
          
          <button 
            className={`py-5 text-[18px] text-center px-9 ${seccion === seccionArr ? 'bg-[#10c210] text-white' : 'efecto'}`}
            key={seccionArr}
            onClick={e => setSeccion(e.target.value)}
            value={seccionArr}
          >{seccionArr}</button>

        ))}

      </div>

    </div>
  )
}

export default BtnSecciones
