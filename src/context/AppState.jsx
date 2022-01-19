import { useReducer } from "react";
import AppReducer from './AppReducer';
import AppContext from "./AppContext";
import {
    CAMBIAR_SECCION,
    DEFINIR_VUELO,
    DEFINIR_HOSPEDAJE,
    DEFINIR_DATOS_COTIZACION,
    DEFINIR_VALUES,
    RESETEAR_APP,
    CALCULAR_COSTO
} from "../types";

const AppState = props => {

    const initialState = {
        seccion: 'Vuelos',
        vuelo: {
            value: undefined
        },
        hospedaje: {
            value: undefined
        },
        cotizacion: {},
        values: {},
        costo: 0
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //func aqui 
    const setSeccion = seccion => {
        dispatch({
            type: CAMBIAR_SECCION,
            payload: seccion
        })
    }

    const setVuelo = obj => {
        dispatch({
            type: DEFINIR_VUELO,
            payload: obj
        })
    }

    const setHospedaje = obj => {
        dispatch({
            type: DEFINIR_HOSPEDAJE,
            payload: obj
        })
    }

    const setCotizacion = obj => {
        dispatch({
            type: DEFINIR_DATOS_COTIZACION,
            payload: obj
        })
    }

    const setValues = values => {
        dispatch({
            type: DEFINIR_VALUES,
            payload: values
        })
    }

    const resetApp = () => {
        dispatch({
            type: RESETEAR_APP
        })
    }

    const setCosto = costo => {
        dispatch({
            type: CALCULAR_COSTO,
            payload: costo
        })
    }

    return (
        <AppContext.Provider
            value={{
                seccion: state.seccion,
                vuelo: state.vuelo,
                hospedaje: state.hospedaje,
                cotizacion: state.cotizacion,
                values: state.values,
                costo: state.costo,
                setSeccion,
                setVuelo,
                setHospedaje,
                setCotizacion,
                setValues,
                resetApp,
                setCosto
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;
