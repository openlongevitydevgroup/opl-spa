

const formReducer = (state,action) => {
    switch(action.type){
        case 'USER_INPUT':
        return{
            ...state, 
            [action.key]: action.value
        }
        case 'USER_SELECT': 
        return{
            ...state, 
            parentQuestion: action.value,
            parentQuestionId: action.id
        }

        case 'USER_SUBMIT': {
            return {
                ...state, 
                title: "", 
                description:"",
                parentQuestion: "None", 
                species: "", 
                organ: "", 
                citations: "",
            }


        }

    }
    
}

export default formReducer;