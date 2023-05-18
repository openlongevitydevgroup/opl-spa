import {createSlice} from '@reduxjs/toolkit'

/// This slice and actions are related to the question form.

export const DEFAULT_STATE = {
    submitFormOpen: false, 
    chosenParent: false,
    formDetails: {
        title: '', 
        description: '', 
        parentTitle: 'None',
        parentId: 0,
        species: '', 
        citation: '', 

    },
    submitModalOpen: false,
    submitStatus : {
        status: null, 
        title: null, 
        message: null,
    }
}
//Paylod data structure: {hasParent: boolean, parent: 'id-string'}
const reducers = {
    toggleFormOpen(state){
        state.submitFormOpen = true
    }, 
    toggleFormClose(state){
        state.submitFormOpen = false
    },
    chooseParent(state, action){
            state.chosenParent = true;
            state.formDetails.parentTitle = action.payload.chosenParentTitle;
            state.formDetails.parentId = action.payload.parentId;
        },
    // input change payload datastructure = {id=string, value=string}
    inputChange(state, action){
        state.formDetails[action.payload.id] = action.payload.value
    },
    selectChange(state, action){
        state.formDetails.parentId =  action.payload.id
    },
    resetForm: () => DEFAULT_STATE,
    toggleModalOpen(state){
        state.submitModalOpen = true
    },
    toggleModalClose(state){
        state.submitModalOpen = false
    },
    setSubmitStatus(state, action){
        state.submitStatus = {
            status : action.payload.status, 
            title : action.payload.title,
            message: action.payload.message
        }
    }

}

const formSlice = createSlice(
    {name: 'form', 
    initialState: DEFAULT_STATE,
    reducers: reducers
 }
)



export default formSlice; 
export const formActions = formSlice.actions;
