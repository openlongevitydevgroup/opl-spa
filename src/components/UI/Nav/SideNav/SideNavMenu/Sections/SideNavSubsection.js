import { useState, useRef, useEffect } from "react";
import sideNavMenuPopup from "./sideNavPopup";
import SideNavButton from "../Buttons/SideNavButton";
function SideNavSubsection({ anchor, children, isOpen, classNames }) {
  //State to keep track of the menu
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Reference to the DOM element of the menu. This will help in detecting clicks outside the menu.
  const menuRef = useRef();
  const isClickedHandler = ({ isActive }) => {};

  useEffect(() => {
    if (anchor && clicked) {
      //Get the position of the anchor element on the screen
      const rect = anchor.getBoundingClientRect();
      // Set the position of the menu to be just below and aligned to the left of the anchor.
      // The values for 'top' and 'left' consider the page's scroll position.

      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.bottom + window.scrollX,
      });
    }
  }, [anchor, isOpen]);

  useEffect(() => {
    //This effect handles the scenario when a user clicks outside the menu
    function handleOutsideClick(event) {
      //If the click event's target is outside the menu, close menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
      }
    }
  });

  return (
    <div className={classNames}>
      {children}
      {clicked && <sideNavMenuPopup />}
    </div>
  );
}

export default SideNavSubsection;
