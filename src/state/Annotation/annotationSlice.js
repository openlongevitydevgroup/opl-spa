import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    annotation: "",
    gene: {
        geneId: "",
        geneName: "",
        geneSymbol: "", 
        species: "", 
    }, 
    theory: {
        theoryId: "", 
        title: "", 
        description: "", 
        parent: ""
    }, 
    protein: {
        proteinId: "", 
        proteinName: "", 
        species: "",
    },
}

const reducers = {
    setState(state,actions){
        state[actions.payload.key] = actions.payload.value; 
    },

}

const annotationSlice = createSlice(
    {
        name: "annotation", 
        initialState: INITIAL_STATE,
        reducers: reducers
    }
)

export default annotationSlice; 
export const annotationActions = annotationSlice.actions;