import {createSlice} from '@reduxjs/toolkit'

// This slice and these actions are related to how the quetsions are viewed including search results from the search bar. 

const DEFAULT_STATE = {
    viewType: 'tree', 
    searchQuery: '',
    filteredResults: null,
    filterOpen: false,
    filters: {
        species: false,
    }

}

const reducers = {
    toggleTreeState(state){//Set the view type of the question to a hierarchical list 
        state.viewType = 'tree'
    }, 
    toggleListState(state){//Set the view type of the question as a list 
        state.viewType = 'table' 
    },
    setQuery(state, actions){//Sets the search query from search bar 
        state.searchQuery = actions.payload.query
    },
    setSearchResults(state, actions){//Gets the search results from the database using the query 
        state.filteredResults = actions.payload.results
    },
    toggleFilter(state){//Opens filter draw
        state.filterOpen = !state.filterOpen
    },
    toggleFilterState(state, actions){//Changes state of filters
        const chosenState = actions.payload.filter; 
        state.filters[chosenState] = !state.filters[chosenState];
    }

}


const questionSlice = createSlice({
    name: 'question', 
    initialState: DEFAULT_STATE,
    reducers: reducers
})

export default questionSlice
export const questionActions = questionSlice.actions