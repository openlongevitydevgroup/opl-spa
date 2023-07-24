import withOnChangeHandler from "../../../utils/hoc/withOnChangeHandler";


function textArea(props) {
  return (
    <textarea
      onChange={props.onChange}
      className={props.className}
      placeholder={props.placeHolder}
    ></textarea>
  );
}


const TextArea = withOnChangeHandler(textArea); 
export default TextArea;
