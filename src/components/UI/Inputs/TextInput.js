import withOnChangeHandler from "../../../utils/hoc/withOnChangeHandler";
function textInput(props){
    return(
        <input type="text" onChange={props.onChange} className={props.className} placeholder={props.placeHolder}></input>
    )
}

const TextInput = withOnChangeHandler(textInput)
export default TextInput; 

