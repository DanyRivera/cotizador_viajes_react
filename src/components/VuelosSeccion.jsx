import useSelect from "../hooks/useSelect";
import { origenes, horarios, clases } from "../data";
import Btn from "./Btn";

const VuelosSeccion = () => {

    //https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
    //https://rapidapi.com/blog/most-popular-api/?utm_source=google&utm_medium=cpc&utm_campaign=Beta&utm_term=%2Bapi_b

    const [origen, SelectOrigen] = useSelect('Selecciona el Origen', origenes)
    const [destino, SelectDestino] = useSelect('Selecciona el Destino', origenes)
    const [aerolinea, SelectAerolinea] = useSelect('Selecciona la Aerolínea', origenes)
    const [horario, SelectHorarios] = useSelect('Selecciona el Horario', horarios)
    const [clase, SelectClase] = useSelect('Selecciona la Clase', clases)

    return (
        <>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10">
                <SelectOrigen />
                <SelectDestino />
                <SelectAerolinea />
                <SelectHorarios />
                <SelectClase />
            </div>

            <Btn texto='Continuar' />
        </>
    )
}

export default VuelosSeccion
