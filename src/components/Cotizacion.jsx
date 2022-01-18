import { useContext } from "react";
import AppContext from "../context/AppContext";
import ParrafoCotizacion from "./ParrafoCotizacion";

const Cotizacion = () => {

    const { cotizacion } = useContext(AppContext)

    const {
        origen,
        estadoOrigen,
        destino,
        estadoDestino,
        aerolinea,
        horario,
        clase,
        estrellas,
        servicio,
        noches,
        habitaciones,
        zona
    } = cotizacion;

    return (
        <div className="grid lg:grid-cols-4 text-center my-10">

            <ParrafoCotizacion
                label={'Origen:'}
                info={origen}
            />

            <ParrafoCotizacion
                label={'Estado de Origen:'}
                info={estadoOrigen}
            />

            <ParrafoCotizacion
                label={'Destino:'}
                info={destino}
            />

            <ParrafoCotizacion
                label={'Estado de Destino:'}
                info={estadoDestino}
            />

            <ParrafoCotizacion
                label={'Aerolínea:'}
                info={aerolinea}
            />

            <ParrafoCotizacion
                label={'Horario:'}
                info={horario}
            />

            <ParrafoCotizacion
                label={'Clase:'}
                info={clase}
            />

            <ParrafoCotizacion
                label={'Estrellas del Hotel:'}
                info={estrellas}
            />

            <ParrafoCotizacion
                label={'Servicio:'}
                info={servicio}
            />

            <ParrafoCotizacion
                label={'Noches:'}
                info={noches}
            />

            <ParrafoCotizacion
                label={'Numero de Habitaciones:'}
                info={habitaciones}
            />

            <ParrafoCotizacion
                label={'Ubicación:'}
                info={zona}
            />

        </div>

        
    )
}

export default Cotizacion
