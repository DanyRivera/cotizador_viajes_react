import {
    CAMBIAR_SECCION,
    DEFINIR_VUELO,
    DEFINIR_HOSPEDAJE,
    DEFINIR_DATOS_COTIZACION,
    DEFINIR_VALUES,
    RESETEAR_APP,
    CALCULAR_COSTO
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
                cotizacion: action.payload
            }

        case DEFINIR_VALUES:
            return {
                ...state,
                values: action.payload,
            }

        case CALCULAR_COSTO:
            return {
                ...state,
                costo: action.payload,
            }

        case RESETEAR_APP:
            return {
                ...state,
                seccion: 'Vuelos',
                vuelo: { value: undefined },
                hospedaje: { value: undefined },
                cotizacion: {},
                values: {},
                costo: 0
            }


        default:
            return state;
    }

}
