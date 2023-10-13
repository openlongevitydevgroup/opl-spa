import { useState } from "react";
import capitaliseFirstLetter from "../../../../../utils/functions/stringManipulation/capitaliseFirstLetter";
import SideNavButton from "./Buttons/SideNavButton";
import SideNavMenuContent from "./Sections/SideNavMenuContent";
import { Collapse } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function SideNavMenu({ section, children }) {
  //We will need section for subjects, genes, species and compounds for now. This will be an accordion
  //The component needs to open the collapsible component which will show the entries
  const title = capitaliseFirstLetter(section);
  const [openMenu, setOpenMenu] = useState(false);
  //OnClickHandler for custom button
  const onClickHandler = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="nav-section w-full">
      <div className="w-full">
        <SideNavButton onClick={onClickHandler}>
          <div className="flex flex-row justify-between">
            <h1 className="pl-4">{title}</h1>
            {openMenu ? (
              <ExpandLess className="pr-2" />
            ) : (
              <ExpandMore className="pr-2" />
            )}
          </div>
        </SideNavButton>
        <Collapse in={openMenu}>
          <SideNavMenuContent section={section} />
        </Collapse>
      </div>
    </div>
  );
}

export default SideNavMenu;
