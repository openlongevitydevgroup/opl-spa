import { Fragment } from "react";
import ReactDOM from "react-dom";

function ModalT(props) {
  const closeHandler = props.close;
  if (!props.open) return;

  return ReactDOM.createPortal(
    <Fragment>
      <div
        className="overlay z-1000 fixed inset-0 bg-black opacity-70 "
        onClick={closeHandler}
      ></div>
      <div className={`z-2000 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-fadein bg-white p-10 ${props.height ? 'h-'+props.height : 'h-max'} ${props.width ? 'w-'+props.width : 'w-max'}`}>
        {props.children}
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}

export default ModalT