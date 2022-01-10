import useSelect from "../hooks/useSelect";
import { 
    estrellasHospedaje, 
    servicios, 
    nochesHospedaje, 
    habitacionesHospedaje, 
    zonas 
} from "../data";
import Btn from "./Btn";

const HospedajesSeccion = () => {

    const [estrellas, SelectEstrellas] = useSelect('Selecciona las Estrellas', estrellasHospedaje);
    const [servicio, SelectServicio] = useSelect('Selecciona el Servicio', servicios);
    const [noches, SelectNoches] = useSelect('Selecciona las Noches', nochesHospedaje);
    const [habitaciones, SelectHabitaciones] = useSelect('Selecciona las Habitaciones', habitacionesHospedaje);
    const [zona, SelectZona] = useSelect('Selecciona la Zona', zonas);

    return (
        <>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-10">
                <SelectEstrellas />
                <SelectServicio />
                <SelectNoches />
                <SelectHabitaciones />
                <SelectZona />
            </div>

            <Btn texto='Cotizar' />
        </>
    )
}

export default HospedajesSeccion
