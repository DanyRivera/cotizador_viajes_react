import { useReducer } from "react";
import AppReducer from './AppReducer';
import AppContext from "./AppContext";
import { 
    CAMBIAR_SECCION 
} from "../types";

const AppState = props => {

    const initialState = {
        seccion: 'Vuelos'
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //func aqui 
    const setSeccion = seccion => {
        dispatch({
            type: CAMBIAR_SECCION,
            payload: seccion
        })
    }

    return (
        <AppContext.Provider
            value={{
                seccion: state.seccion,
                setSeccion
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;
