import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Btn from "./Btn";
import Cotizacion from "./Cotizacion";
import { calcularCosto } from "../helper";

const CotizarSeccion = () => {

    const [mensaje, setMensaje] = useState(true);

    const { cotizacion, vuelo, hospedaje, setCotizacion } = useContext(AppContext);

    useEffect(() => {

        const obj = {
            ...hospedaje,
            ...vuelo
        }

        //Aquí van los calculos de la cotizacion
        calcularCosto(cotizacion);

        setCotizacion(obj);

    }, [hospedaje, vuelo])

    useEffect(() => {

        if (Object.keys(cotizacion).length > 0) {

            const arrErr = Object.values(cotizacion).filter(value => value == undefined);

            if (arrErr.length == 0) {
                setMensaje(false);
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
                            <span className="text-5xl font-bold">Costo: </span>$5,464.60
                        </p>
                    </div>

                    <Btn texto='Resetear App' />

                </>

            )}

        </>
    )
}

export default CotizarSeccion
