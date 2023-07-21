function TextArea(props){
    const setState = props.setState; 
    const placeHolder = props.placeHolder;
    const onChangeHandler = (e) => {
        const value = e.target.value; 
        setState(value);
    }
    return(
        <textarea onChange={onChangeHandler} className={props.className} placeholder={placeHolder}>

        </textarea>
    )
}; 

export default TextArea; 

