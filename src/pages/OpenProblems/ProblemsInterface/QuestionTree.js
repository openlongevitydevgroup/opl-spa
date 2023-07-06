import { TreeView, TreeItem } from "@mui/lab";
import { useSpring, animated } from "@react-spring/web";
import Collapse from "@mui/material/Collapse";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { PropTypes } from "prop-types";
import QuestionDetail from "./QuestionDetail";

//Transitions for the hierarchical list component
function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translated3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translated3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });
  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

//Hierarchical list to be rendered in the tree view function below
function QuestionListTree(props) {
  const questions = props.questions;
  return (
    <TreeView
      defaultEndIcon={<IndeterminateCheckBoxOutlinedIcon />}
      defaultExpandIcon={<AddBoxOutlinedIcon />}
      defaultCollapseIcon={
        <IndeterminateCheckBoxOutlinedIcon></IndeterminateCheckBoxOutlinedIcon>
      }
    >
      {questions.map((question) => {
        return (
          <TreeItem
            key={question.question_id}
            id={question.question_id.toString()}
            sx={{ borderLeft: "1px dashed", paddingTop: "5px" }}
            TransitionComponent={TransitionComponent}
            nodeId={question.question_id.toString()}
            label={question.title}
          >
            <QuestionDetail question={question} />
            {question.children
              ? question.children.map((child) => (
                  <TreeItem
                    label={child.title}
                    key={child.question_id}
                    id={child.question_id.toString()}
                    nodeId={child.question_id.toString()}
                    sx={{ borderLeft: "1px dashed", paddingTop: "5px" }}
                  >
                    <QuestionDetail question={question} />
                  </TreeItem>
                ))
              : null}
          </TreeItem>
        );
      })}
    </TreeView>
  );
}

export default QuestionListTree;
