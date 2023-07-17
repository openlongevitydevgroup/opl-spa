import { TreeView, TreeItem } from "@mui/lab";
import { useSpring, animated } from "@react-spring/web";
import Collapse from "@mui/material/Collapse";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { PropTypes } from "prop-types";
import TreeDetails from "./TreeDetails";

//Transitions for the hierarchical list component
function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translated3d(0px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translated3d(${props.in ? 0 : 50}px,0,0)`,
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
            key={question.problem_id}
            id={question.problem_id.toString()}
            sx={{ borderLeft: "1px dashed", paddingTop: "5px" }}
            TransitionComponent={TransitionComponent}
            nodeId={question.problem_id.toString()}
            label={question.title}
          >

            <div className="root-problems">
              <hr className="border-theme-blue"/>
            <TreeDetails question={question} />
            <hr className="border-theme-blue"/>
            </div>
            {question.children
              ? question.children.map((child) => (
                  <TreeItem
                    label={child.title}
                    key={child.problem_id}
                    id={child.problem_id.toString()}
                    nodeId={child.problem_id.toString()}
                    sx={{ borderLeft: "1px dashed", paddingTop: "5px" }}
                  >
                    <TreeDetails question={child} />
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
