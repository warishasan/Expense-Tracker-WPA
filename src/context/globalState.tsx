import React, {createContext,useReducer} from 'react'
import AppReducer from './reducer'
import {reducerStateType,contextAPIType} from '../types/types'

const InitialStateContext:contextAPIType = {state: [], deleteTransaction ( ){}  ,  addTransaction () {} };

export const GlobalContext = createContext(InitialStateContext);

const InitialStateReducer:reducerStateType[] = [ ]


export const GlobalProvider = ({children}:any) => {

    const [state,dispatch] = useReducer(AppReducer, InitialStateReducer )
    console.log( state);

    function deleteTransaction(id:number){
        dispatch({type: 'DELETE_TRANSACTION',
        payload: id


        })


    }

    function addTransaction(transaction:reducerStateType){
        dispatch({type: 'ADD_TRANSACTION',
        payload: transaction


        })


    }




    return (
            <GlobalContext.Provider value = {{state,deleteTransaction,addTransaction}}>
                {children}
            </GlobalContext.Provider>


    );


}
 