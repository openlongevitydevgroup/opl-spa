import {createSlice} from '@reduxjs/toolkit'

// This slice and these actions are related to how the quetsions are viewed including search results from the search bar. 

const DEFAULT_STATE = {
    viewType: 'tree', 
    searchQuery: '',
    filteredResults: null,

}

const reducers = {
    toggleTreeState(state){
        state.viewType = 'tree'
    }, 
    toggleListState(state){
        state.viewType = 'table' 
    },
    setQuery(state, actions){
        state.searchQuery = actions.payload.query
    },
    setSearchResults(state, actions){
        state.filteredResults = actions.payload.results
    }
}

const questionSlice = createSlice({
    name: 'question', 
    initialState: DEFAULT_STATE,
    reducers: reducers
})

export default questionSlice
export const questionActions = questionSlice.actions