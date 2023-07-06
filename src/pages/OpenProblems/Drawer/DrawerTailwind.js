import { useSelector, useDispatch } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Fragment, useState} from "react";
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

function getHeight(el) {
  const element = document.querySelector(el);
  const height = element.scrollHeight;
  return height;
}

function FilterGroup(props) {
  const filterStates = useSelector((state) => state.question.filters);
  const [listHeight, setListHeight] = useState(0);
  const dispatch = useDispatch();

  const toggleFilterDropdown = (e) => {
    //Generic handler to toggle filter states
    const filter = e.target.value;
    filterStates[filter]
      ? dispatch(
          questionActions.toggleFilterState({ filter: filter, bool: false })
        )
      : dispatch(
          questionActions.toggleFilterState({ filter: filter, bool: true })
        );
    const height = getHeight(`.${filter}`); //Get height of element
    setListHeight(height + 500); //To set the max height for transition, any lower the transition does not work
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
          filterStates[title] ? `max-h-[${listHeight}px]` : "max-h-0"
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
      <div
        className={`sidebar py-2 bg-grey-100 ${
          drawerState ? `max-h-[500px]` : "max-h-0"
        } overflow-hidden bg-white text-center shadow transition-max-height duration-300 ease-in-out mt-1`}
      >
        <FilterContent />
      </div>
    );
  } else {
    return (
      <div
        className={`sidebar py-2 bg-grey-100 h-full transition-width ${
          drawerState ? "w-1/5" : "w-0"
        } bg-white text-center shadow duration-300 ease-in-out mt-1`}
      >
        {drawerState ? <FilterContent /> : null}
      </div>
    );
  }
}

export default DrawerTailwind;
