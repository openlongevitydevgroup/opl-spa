import { TextField} from '@mui/material'
import {Form} from 'react-router-dom'

const STYLES = {

    
}

function SearchBar(props){    
    const {state:searchInput, onChange, onSubmit} = props.searchFunctions
    return(
    <Form onSubmit={onSubmit}>
            <TextField name='search-query' label="Search for a question" value={searchInput} onChange={onChange} fullWidth={true} sx={STYLES} size='small' variant='filled' margin='normal'/>
    </Form>

    )
}

export default SearchBar; 
