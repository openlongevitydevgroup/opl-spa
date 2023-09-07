import withOnChangeHandler from "../../../utils/hoc/withOnChangeHandler";

function textArea(props) {
  return (
    <textarea
      className={props.className}
      placeholder={props.placeHolder}
    ></textarea>
  );
}

export function TextAreaNoChangeHandler(props) {
  return (
    <textarea
      className={props.className}
      placeholder={props.placeHolder}
      onChange={props.onChange}
    ></textarea>
  );
}

const TextAreaChangeHandler = withOnChangeHandler(textArea);
export default TextAreaChangeHandler;
