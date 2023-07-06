import { TextField} from '@mui/material'
import {Form, useLoaderData} from 'react-router-dom'
import { questionActions } from '../../../state/Question/questionSlice'
import { formActions } from '../../../state/Question/questionFormSlice'
import { useDispatch, useSelector } from 'react-redux'
const STYLES = {

    
}

function SearchBar(props){    
    const {data:questions} = useLoaderData()
    const queryState = useSelector( state => state.question.searchQuery)

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
            <TextField className='z-0' name='search-query' label="Search for a question" onChange={searchOnChange} fullWidth={true} sx={STYLES} size='small' variant='filled' margin='normal'/>
    </Form>

    )
}

export default SearchBar; 
