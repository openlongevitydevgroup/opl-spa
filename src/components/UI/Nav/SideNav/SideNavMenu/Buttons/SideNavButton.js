import { useState } from "react";

function SideNavButton({ children, classNames, onClick }) {
  const [isActive, setActive] = useState(false);
  const onClickHandler = () => {
    setActive(!isActive);
    onClick(); //Addditional onClick from the parent;
  };
  return (
    <button
      onClick={onClickHandler}
      className={`w-full py-2 text-center transition-colors duration-300 hover:bg-gray-300 ${
        isActive ? "bg-gray-200" : null
      } ${classNames}`}
    >
      {children}
    </button>
  );
}

export default SideNavButton;
