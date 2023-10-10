import { useState } from "react";
import capitaliseFirstLetter from "../../../../../utils/functions/stringManipulation/capitaliseFirstLetter";
import SideNavButton from "./Buttons/SideNavButton";
import SideNavMenuContent from "./Sections/SideNavSection";
import { Collapse } from "@mui/material";
function SideNavMenu({ section, children }) {
  //We will need section for subjects, genes, species and compounds for now. This will be an accordion
  //The component needs to open the collapsible component which will show the entries
  const title = capitaliseFirstLetter(section);
  const [openMenu, setOpenMenu] = useState(false);
  //OnClickHandler for custom button
  const onClickHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="nav-section w-full">
      <div className="w-full">
        <SideNavButton onClick={onClickHandler}>
          <h1>{title}</h1>
        </SideNavButton>
        <Collapse>
          <SideNavMenuContent section={section} />
        </Collapse>
      </div>
    </div>
  );
}

export default SideNavMenu;
