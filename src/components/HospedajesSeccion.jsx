import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
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

    const { setValues, hospedaje, values } = useContext(AppContext)

    const [estrellas, SelectEstrellas] = useSelect('Selecciona las Estrellas', estrellasHospedaje, values.estrellas || hospedaje.estrellas);
    const [servicio, SelectServicio] = useSelect('Selecciona el Servicio', servicios, values.servicio || hospedaje.servicio);
    const [noches, SelectNoches] = useSelect('Selecciona las Noches', nochesHospedaje, values.noches || hospedaje.noches);
    const [habitaciones, SelectHabitaciones] = useSelect('Selecciona las Habitaciones', habitacionesHospedaje, values.habitaciones || hospedaje.habitaciones);
    const [zona, SelectZona] = useSelect('Selecciona la Zona', zonas, values.zona || hospedaje.zona);

    useEffect(() => {

        //Obetener la info para llenar el obj de hospedaje
        setValues({
            estrellas: estrellas ? estrellas : hospedaje.estrellas,
            servicio: servicio ? servicio : hospedaje.servicio,
            noches: noches ? noches : hospedaje.noches,
            habitaciones: habitaciones ? habitaciones : hospedaje.habitaciones,
            zona: zona ? zona : hospedaje.zona
        });

    }, [estrellas, servicio, noches, habitaciones, zona]);

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
