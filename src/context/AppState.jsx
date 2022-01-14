import { useReducer } from "react";
import AppReducer from './AppReducer';
import AppContext from "./AppContext";
import { 
    CAMBIAR_SECCION,
    DEFINIR_VUELO,
    DEFINIR_HOSPEDAJE,
    DEFINIR_DATOS_COTIZACION
} from "../types";

const AppState = props => {

    const initialState = {
        seccion: 'Vuelos',
        vuelo: {},
        hospedaje: {},
        cotizacion: {}
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

    const setCotizacion = () => {
        dispatch({
            type: DEFINIR_DATOS_COTIZACION
        })
    }

    return (
        <AppContext.Provider
            value={{
                seccion: state.seccion,
                vuelo: state.vuelo,
                hospedaje: state.hospedaje,
                setSeccion,
                setVuelo,
                setHospedaje,
                setCotizacion
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;
