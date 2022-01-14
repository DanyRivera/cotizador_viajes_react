import {
    CAMBIAR_SECCION,
    DEFINIR_VUELO,
    DEFINIR_HOSPEDAJE,
    DEFINIR_DATOS_COTIZACION
} from "../types";

export default (state, action) => {

    switch (action.type) {

        case CAMBIAR_SECCION:
            return {
                ...state,
                seccion: action.payload
            }

        case DEFINIR_VUELO:
            return {
                ...state,
                vuelo: action.payload
            }

        case DEFINIR_HOSPEDAJE:
            return {
                ...state,
                hospedaje: action.payload
            }

        case DEFINIR_DATOS_COTIZACION:
            return {
                ...state,
                
            }

        default:
            return state;
    }

}
