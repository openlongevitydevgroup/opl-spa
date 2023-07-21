function TextArea(props){
    const setState = props.setState; 
    const onChangeHandler = (e) => {
        const value = e.target.value; 
        setState(value);
    }
    return(
        <textarea className={props.className}>

        </textarea>
    )
}; 

export default TextArea; 

