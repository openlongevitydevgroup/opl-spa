import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from "@mui/material";
import { useState } from "react";
function InterfaceTemplate(props) {
  const title = props.title;

  // States for button
  const [openSection, setOpenSection] = useState(true);
  const onClickHandler = () => {
    setOpenSection(!openSection);
  };
  return (
    <div className="classification mt-8 w-full border border-gray-100 bg-white px-8 py-2 shadow-lg ">
      <div className="header flex flex-row justify-between">
        <h1 className="py-2 text-lg text-theme-blue md:text-2xl">{title}</h1>
        <Button onClick={onClickHandler}>
            {openSection ?<IndeterminateCheckBoxIcon /> : <AddBoxIcon />}
        </Button>
      </div>
      <hr className="py-2" />
      <div
        className={`accordion w-full py-2 ${
          openSection ? "max-h-[300px]" : "max-h-[0px] text-white"
        } overflow-hidden transition-all duration-500 ease-in-out`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default InterfaceTemplate;
