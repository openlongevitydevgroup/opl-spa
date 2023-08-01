import { List } from "@mui/material";
import { useSelector } from "react-redux";
import MuiListComponent from "./MuiListComponent";

function MuiList(props) {
  const viewState = useSelector((state) => state.question.viewType);
  const allProblems = useSelector((state) => state.question.allProblems);
  const rootProblems = useSelector((state) => state.question.rootProblems);
  const problems = viewState === "tree" ? rootProblems : allProblems;
  const children = props.children;
  const data = children || problems; // Use children if it exists, otherwise use problems;

  return (
    <List sx={{ width: "100%" }} variant="outlined">
      {data &&
        data.map((item, index) => (
          <MuiListComponent key={index} title={item.title} problem={item} />
        ))}
    </List>
  );
}

export default MuiList;
