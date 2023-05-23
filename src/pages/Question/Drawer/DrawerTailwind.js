import { useSelector, useDispatch } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Fragment, useState, useEffect } from "react";
import { questionActions } from "../../../state/Question/questionSlice";
function ListCheckBox(props) {
  const { name, id } = props;
  return (
    <li>
      <input type="checkbox" name={name} id={id} />
      <label htmlFor={id} className="pl-2">
        {name}
      </label>
    </li>
  );
}


function FilterGroup(props) {
  const filterStates = useSelector((state) => state.question.filters);
  const [listHeight, setListHeight] = useState("0");
  const dispatch = useDispatch();
  const toggleFilterDropdown = (e) => {
    //Generic handler to toggle filter states
    const filter = e.target.value;
    const doc = document.querySelector(`.${filter}`);
    const height = doc.scrollHeight; //Get the height of the element

    dispatch(questionActions.toggleFilterState({ filter }));
    if (filterStates[filter]) {
      setListHeight(height.toString());
    } else {
      setListHeight("0");
    }
  };
  const { filterTitle, valueList } = props;
  const title = filterTitle.toLowerCase();

  return (
    <div className="overflow-hidden">
      <button value={title} onClick={toggleFilterDropdown}>
        <ArrowDropDownIcon />
        {filterTitle}
      </button>
      <ul
        className={`${
          filterStates[title] ? `max-h-[500px]` : "max-h-0"
        } ${title} w-full transition-max-height duration-300 ease-in-out`}
      >
        <ListCheckBox name={valueList}></ListCheckBox>
      </ul>
    </div>
  );
}

function FilterContent() {
  return (
    <Fragment>
      <h1 className="overflow-hidden py-2 pt-4 font-bold">Filters</h1>
      <FilterGroup filterTitle="Species" valueList={["None"]} />
    </Fragment>
  );
}

function DrawerTailwind() {
  const drawerState = useSelector((state) => state.question.filterOpen);
  const viewWidthState = useSelector((state) => state.question.viewWidth);

  if (viewWidthState < 450) {
    return (
      <div className={`sidebar ${drawerState  ? "h-1/5" : "h-0"} transition-height duration-300 ease-in-out overflow-hidden bg-white text-center shadow`}>
        <FilterContent />
      </div>
    );
  } else {
    return (
      <div
        className={`sidebar h-full transition-width ${
          drawerState ? "w-1/5" : "w-0"
        } bg-white text-center shadow duration-300 ease-in-out`}
      >
        {/* {drawerState ? <FilterContent /> : null} */}
        <FilterContent />
      </div>
    );
  }
}

export default DrawerTailwind;
