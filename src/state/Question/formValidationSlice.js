import {createSlice} from 'react-redux'

const DEFAULT_STATE = {
    title: false, 
    description: false,
}

const reducers = {
    checkTitle(state){
        if(state.title.trim().length > 0){
            state.title = true
        }
    }, 
    checkDescription(state){
        if(state.description.trim().length > 0){
            state.description = true
        } 
    }
} 

const formValidationSlice = createSlice({
    name: 'validation', 
    reducers : reducers
})