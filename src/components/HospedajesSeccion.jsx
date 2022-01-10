import useSelect from "../hooks/useSelect";
import { estrellasHospedaje } from "../data";
import Btn from "./Btn";

const HospedajesSeccion = () => {

    const [estrellas, SelectEstrellas] = useSelect('Selecciona las Estrellas', estrellasHospedaje);
    const [servicio, SelectServicio] = useSelect('Selecciona el Servicio del Hotel', estrellasHospedaje);
    const [noches, SelectNoches] = useSelect('Selecciona cuantas Noches', estrellasHospedaje);
    const [habitaciones, SelectHabitaciones] = useSelect('Selecciona las Habitaciones', estrellasHospedaje);
    const [zona, SelectZona] = useSelect('Selecciona la Zona', estrellasHospedaje);

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
