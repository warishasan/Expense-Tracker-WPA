export type reducerActionType ={

    type: string
    payload: any
   
}

export type reducerStateType ={

    id: number
    details: string
    amount: string
   
}

export type contextAPIType ={

    state: reducerStateType[]
    deleteTransaction: (id: number) => void
    addTransaction: (transaction: reducerStateType) => void;
   
}


