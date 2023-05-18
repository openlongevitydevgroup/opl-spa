import {createSlice} from '@reduxjs/toolkit'

const DEFAULT_STATE = {
    title: false, 
    description: false,
}

const reducers = {
    checkTitle(state, actions){
        if(actions.title.trim().length > 0){
            state.title = true
        }else{
            state.title = false
        }
    }, 
    checkDescription(state, actions){
        if(actions.description.trim().length > 0 && actions.description !== 'Please add a description for your question title'){
            state.description = true
        }else{
            state.description = false
        }
    }
} 

const formValidationSlice = createSlice({
    name: 'validation',
    initialState: DEFAULT_STATE, 
    reducers : reducers
})

export default formValidationSlice; 
export const formValidationActions = formValidationSlice.actions;