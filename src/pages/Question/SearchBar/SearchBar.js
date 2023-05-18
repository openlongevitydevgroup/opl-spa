import { TextField} from '@mui/material'
import {Form} from 'react-router-dom'
import { questionActions } from '../../../state/Question/questionSlice'
import { formActions } from '../../../state/Question/questionFormReducer'
import { useDispatch, useSelector } from 'react-redux'
const STYLES = {

    
}

function SearchBar(props){    
    // const {state:searchInput, onChange, onSubmit} = props.searchFunctions
    const questions = props.questions
    const queryState = useSelector( state => state.question.searchQuery)
    const results = useSelector(state => state.question.filteredResults)

    const dispatch = useDispatch()
    const searchOnChange = (e) => {
        const query = e.target.value; 
        dispatch(questionActions.setQuery({query: query}))
        }
            //Search bar - dealing with submitted query - basic functionality. 
    const searchFunction = () => {
        dispatch(questionActions.toggleListState())
        if(queryState.trim().length ===0){
            dispatch(formActions.toggleFormClose())
            dispatch(questionActions.setSearchResults({results:null}))
        }; 
        if (queryState.length > 0){
            const filteredQuestions = questions.filter((entry) => entry.title.toLowerCase().includes(queryState.toLowerCase())
            )
            dispatch(questionActions.setSearchResults({results:filteredQuestions}))
        }
    }
    
    return(
    <Form onSubmit={searchFunction}>
            <TextField name='search-query' label="Search for a question" onChange={searchOnChange} fullWidth={true} sx={STYLES} size='small' variant='filled' margin='normal'/>
    </Form>

    )
}

export default SearchBar; 
