import { useContext } from "react";
import AppContext from "../context/AppContext";
import { calcularCosto } from "../helper";

const Btn = ({ texto }) => {

    const { setSeccion, resetApp, seccion } = useContext(AppContext);

    const handleClick = () => {

        if(seccion == 'Vuelos') {
            setSeccion('Hospedajes')
        } 

        if(seccion == 'Hospedajes') {
            setSeccion('Cotizacion');
        }

        if(texto == 'Resetear App') {
            //Resetear la app
            resetApp();
        }

    }

    return (
        <div className="flex justify-end mt-10">
            <button
                className="block bg-[#10c210] text-xl rounded text-white py-3 px-10 transition-all ease-in hover:bg-[#0aa50a]"
                onClick={e => handleClick()}
            >
                {texto}
            </button>
        </div>
    )
}

export default Btn
