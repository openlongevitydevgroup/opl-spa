import React from "react";
import { useEffect, useState } from "react";
import extractAnnotationInformation from "../../../../../../utils/functions/extractAnnotationInformation";
import apiAnnotations from "../../../../../../api/apiAnnotations";
import {
  isHierarchical,
  buildHierarchicalTree,
} from "../../../../../../utils/functions/dataManipulation/buildTree";
import SideNavButton from "../Buttons/SideNavButton";
import { ExpandMore } from "@mui/icons-material";
import SideNavSubsection from "./SideNavSubsection";
import CheckBoxForm from "../CheckBoxForm.js/CheckBoxForm";
async function fetchMenuItems(section, setError) {
  const category = section;
  try {
    const response = await apiAnnotations.getAnnotationEntries({
      annotation: category,
    });
    const extractedInformation = response.data.map((data) =>
      extractAnnotationInformation(data, category)
    );
    return extractedInformation;
  } catch (error) {
    setError(error);
  }
}

function SideNavMenuContent({ section }) {
  const [menuItems, setMenuItems] = useState(null); //Main data for all the tags
  const [error, setError] = useState(null);
  const [popUp, setPopUp] = useState(false); // State for controlling whether the parent tags are clicked or not
  const controller = new AbortController();

  const popUpHandler = ({ isActive, setActive }) => {
    if (isActive) {
      setPopUp(isActive);
      console.log(true);
    } else {
      setPopUp(false);
    }
  };

  useEffect(() => {
    async function retrieve() {
      const data = await fetchMenuItems(section, setMenuItems, setError);
      if (data && isHierarchical(data)) {
        const tree = buildHierarchicalTree(data);
        setMenuItems(tree);
      } else {
        setMenuItems(data);
      }
    }
    retrieve();

    return () => {
      controller.abort();
    };
  }, []);
  if (error) {
    return; //Do we need to render anything if there is an error?
  }

  return (
    <div>
      <ul className=" p-2">
        {menuItems &&
          menuItems.map((item) => (
            <li className="text-sm">
              {item.children && item.children.length > 0 ? (
                <>
                  <SideNavButton
                    classNames="flex w-full flex-row justify-between h-max font-semibold text-theme-blue hover:bg-gray-200 hover:bg-opacity-80"
                    onClick={popUpHandler}
                  >
                    <p>{item.title}</p>
                    <ExpandMore />
                  </SideNavButton>
                  <SideNavSubsection classNames="left-1">
                    <CheckBoxForm items={item.children} />
                  </SideNavSubsection>
                </>
              ) : (
                <div
                  key={item.id}
                  className="flex flex-row justify-between p-2 "
                >
                  <CheckBoxForm items={[item]} />
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SideNavMenuContent;
