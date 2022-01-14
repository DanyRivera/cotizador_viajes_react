import { useContext } from "react";
import AppContext from "../context/AppContext";

const Btn = ({ texto, vuelo, hospedaje }) => {

    const { setVuelo, setHospedaje, setSeccion, seccion } = useContext(AppContext);

    const handleClick = () => {


        if(vuelo) {
            setVuelo(vuelo);
        }

        if(hospedaje) {
            setHospedaje(hospedaje);
        }


        if(seccion == 'Vuelos') {
            setSeccion('Hospedajes')
        } 

        if(seccion == 'Hospedajes') {
            setSeccion('Cotizacion');

            //Aquí van los calculos de la cotizacion
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
