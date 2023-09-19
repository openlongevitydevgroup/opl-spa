import { Collapse, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import ListItemContent from "./ListItemContent";
import ListAccordionContent from "../Accordion/ListAccordionContent";
import { HashLink } from "react-router-hash-link";
function MuiListComponent(props) {
  const problem = props.problem;
  const id = problem.problem_id;
  const description = problem.description;
  const children = problem.children;
  const [isExpanded, setExpanded] = useState(false);
  const onClickHandler = () => {
    if (children || description) {
      setExpanded(!isExpanded);
    }
  };

  return (
    <>
      <ListItemButton
        key={id + "bttn"}
        className="w-100 my-2 flex bg-white"
        onClick={onClickHandler}
        sx={{
          width: "100%",
          bgcolor: "white",
          display: "flex",
          justifyContent: "space-between",
          px: "2rem",
          cursor: children || description ? "pointer" : "default", // Add cursor pointer if clickable
        }}
      >
        <ListItemContent>
          <HashLink to={`./${id}#nav`}>
            <ListItemText
              className="text-base hover:text-theme-blue hover:underline md:text-lg"
              primary={problem.title}
            />
          </HashLink>
        </ListItemContent>
        {(children.length > 0 || description) && isExpanded ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )}
      </ListItemButton>
      <div
        className=" border-l border-dashed border-theme-blue "
        key={id + "accordion"}
      >
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{ px: "2rem" }}
        >
          <ListAccordionContent problem={problem} />
        </Collapse>
      </div>
    </>
  );
}

export default MuiListComponent;
