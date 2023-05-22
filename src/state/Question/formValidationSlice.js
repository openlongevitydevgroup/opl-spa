import {createSlice} from '@reduxjs/toolkit'

const DEFAULT_STATE = {
    title: false, 
    description: false,
}

const reducers = {
    checkTitle(state, actions){
        console.log(actions.payload.title)
        if(actions.payload.title.trim().length > 0){
            state.title = true
        }else{
            state.title = false
        }
    }, 
    checkDescription(state, actions){
        if(actions.payload.description.trim().length > 0 && actions.payload.description.trim() !== 'Please add a description for your question title'){
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