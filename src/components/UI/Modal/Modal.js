import { Modal, Box, Paper, Card } from "@mui/material";
import { Fragment } from "react";
import ReactDOM from "react-dom";
const CARD_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "backround.paper",
};

const BOX_STYLES = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
function ModalInstance(props) {
  CARD_STYLES.height = props.height ? props.height : 400;
  CARD_STYLES.width = props.width ? props.width : 400;

  return (
    <div className="modal">
      <Modal
        open={props.open}
        onClose={props.close}
        height={props.height}
        width={props.width}
      >
        <Paper>
          <Card sx={CARD_STYLES}>
            <Box sx={BOX_STYLES}>{props.children}</Box>
          </Card>
        </Paper>
      </Modal>
    </div>
  );
}

export function ModalT(props) {
  const closeHandler = props.close;
  if (!props.open) return;

  return ReactDOM.createPortal(
    <Fragment>
      <div
        className="overlay z-1000 fixed inset-0 bg-black opacity-70"
        onClick={closeHandler}
      ></div>
      <div className="z-2000 fixed left-1/2 top-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 animate-fadein bg-white p-10">
        {props.children}
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}

export default ModalInstance;
