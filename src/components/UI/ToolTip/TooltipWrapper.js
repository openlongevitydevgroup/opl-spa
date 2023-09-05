import { Tooltip } from "@mui/material";
function TooltipWrapper(props) {
  const message = props.message;
  return <Tooltip title={message}>{props.children}</Tooltip>;
}

export default TooltipWrapper;
