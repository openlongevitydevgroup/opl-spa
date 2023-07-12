import { formValidationActions } from "../../../state/formValidationSlice"
const validation = (data) => {
    const text = data.description
    return new Promise((resolve, reject) => {
        if(text.trim().length > 0 ){
            console.log("Not empty")
            resolve();
        }else{
            return reject();
        }
    })
}

export default validation; 