import { TextField, InputAdornment} from '@mui/material'
import {Fragment, useState} from 'react'
import {Form} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';


const STYLES = {

    
}

function SearchBar(props){

    //Search functionality
    const [searchInput, setSearchInput] = useState(''); 
    const onChangeSearch = (e) => {
        setSearchInput(e.target.value)
    } 

    //Search submission 
    
    return(
    <Form>
    <TextField label="Search for a question" value={searchInput} onChange={onChangeSearch} fullWidth={true} sx={STYLES} size='small' variant='filled' margin='normal'/>
    </Form>

    )
}

export default SearchBar; 