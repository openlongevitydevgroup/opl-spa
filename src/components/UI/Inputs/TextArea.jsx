import withOnChangeHandler from "../../../utils/hoc/withOnChangeHandler";

function textArea(props) {
  return (
    <textarea
      className={props.className}
      placeholder={props.placeHolder}
      value={props.value}
      onChange={props.onChange}
    ></textarea>
  );
}

export function TextAreaNoChangeHandler(props) {
  return (
    <textarea
      className={props.className}
      placeholder={props.placeHolder}
      onChange={props.onChange}
      value={props.value}
    ></textarea>
  );
}

const TextAreaChangeHandler = withOnChangeHandler(textArea);
export default TextAreaChangeHandler;
