import { reducerActionType, reducerStateType } from '../types/types'


export default (state: reducerStateType[], action: reducerActionType):reducerStateType[] => {


    switch (action.type) {
        case 'DELETE_TRANSACTION':



            return state.filter(trans => trans.id !== action.payload)

        case 'ADD_TRANSACTION':



            return state = [action.payload, ...state]



        default:
            return state;
    }
}