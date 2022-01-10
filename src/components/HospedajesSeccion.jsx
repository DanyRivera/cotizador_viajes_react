import useSelect from "../hooks/useSelect";
import { origenes } from "../data";
import Btn from "./Btn";

const HospedajesSeccion = () => {

    const [estrellas, SelectEstrellas] = useSelect('Selecciona las Estrellas', origenes);
    const [servicio, SelectServicio] = useSelect('Selecciona el Servicio del Hotel', origenes);
    const [noches, SelectNoches] = useSelect('Selecciona cuantas Noches', origenes);
    const [habitaciones, SelectHabitaciones] = useSelect('Selecciona las Habitaciones', origenes);
    const [zona, SelectZona] = useSelect('Selecciona la Zona', origenes);

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
