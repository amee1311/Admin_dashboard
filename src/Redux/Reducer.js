import {GET} from "./VariableAPI"

const initialValue = {
    user : []
}

export const ApiReducer = (state = initialValue,action) => {
    switch (action.type) {
        case GET:
            return{
                user:action.payload,
            }
            
    
        default:
          return  state
    }
}