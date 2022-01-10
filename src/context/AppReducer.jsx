import { 
    CAMBIAR_SECCION 
} from "../types";

export default (state, action) => {

    switch (action.type) {

        case CAMBIAR_SECCION:
            return {
                ...state,
                seccion: action.payload
            }
    
        default:
            return state;
    }

}
