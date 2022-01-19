import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Btn from "./Btn";
import Cotizacion from "./Cotizacion";
import { calcularCosto } from "../helper";

const CotizarSeccion = () => {

    const [mensaje, setMensaje] = useState(true);

    const { cotizacion, vuelo, hospedaje, costo, setCotizacion, setCosto } = useContext(AppContext);

    const formatearCosto = costo => {
        return costo.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    useEffect(() => {

        const obj = {
            ...hospedaje,
            ...vuelo
        }

        setCotizacion(obj);

    }, [hospedaje, vuelo])

    useEffect(() => {

        if (Object.keys(cotizacion).length > 0) {

            const arrErr = Object.values(cotizacion).filter(value => value == undefined);

            if (arrErr.length == 0) {
                
                setMensaje(false);

                const costoFormateado = formatearCosto(calcularCosto(cotizacion));

                setCosto(costoFormateado);
            }

        }

    }, [cotizacion])

    return (
        <>

            {mensaje ? (

                <h1 className="text-white text-center my-20 text-3xl font-bold">Te faltan datos por completar!</h1>

            ) : (

                <>

                    <Cotizacion />

                    <div className="mb-12 w-full text-center">
                        <p
                            className="text-5xl text-white">
                            <span className="text-5xl font-bold">Costo: </span>{costo}
                        </p>
                    </div>

                    <Btn texto='Resetear App' />

                </>

            )}

        </>
    )
}

export default CotizarSeccion
