import { GET_TITRE_LOAD,GET_TITRE_SUCCESS,GET_TITRE_FAIL,GET_ONE_TITRE,TOGGLE_TRUE,TOGGLE_FALSE } from "../Constants/ActionType";


const initState ={
    titres: [],
    errors: [],
    isLoading: false,
    user: {},
    isEdit :false
}

const Reducer = (state=initState ,{type,payload} ) => {

    switch (type) {
        case GET_TITRE_LOAD : return{ ...state, isLoading: true}
        case GET_TITRE_SUCCESS : return{ ...state, isLoading: false, titres: payload}
        case GET_TITRE_FAIL : return{ ...state, isLoading: false, errors: payload}
        case GET_ONE_TITRE : return{ ...state,user: payload}
        case TOGGLE_TRUE : return{ ...state,isEdit:true}
        case TOGGLE_FALSE : return{ ...state,isEdit:false}
        default: return state;
        
    }
}

export default Reducer