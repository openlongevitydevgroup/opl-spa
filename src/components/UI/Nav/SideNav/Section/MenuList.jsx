// External Libraries
import { Combobox, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Internal Components and Functions
import UpDownIcon from "../../../Icons/UpDown";
import extractAnnotationInformation from "../../../../../utils/functions/extractAnnotationInformation";
import { questionActions } from "../../../../../state/Question/questionSlice";
import CheckSvg from "../../../Icons/Check";
import withSVG from "../../../../../utils/hoc/withSVG";

const defaultParams = {
  w: 4,
  h: 4,
};
const CheckIcon = withSVG(CheckSvg, defaultParams);
function MenuList({ items, category, title }) {
  // States
  const [menuOpen, setMenuOpen] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [query, setQuery] = useState("");
  const selectedItems = useSelector(
    (state) => state.question.filters[category]
  );
  const dispatch = useDispatch();

  // Handlers
  const openHandler = (e) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  const onChangeHandler = (e) => {
    const inputValue = e.target.value.trim();
    if (inputValue === "") {
      setMenuOpen(false);
    } else {
      setQuery(inputValue.toLowerCase());
      setMenuOpen(true);
    }
  };

  // Effects
  useEffect(() => {
    if (items) {
      const list = items.map((item) =>
        extractAnnotationInformation(item, category)
      );
      setListItems(list);
    }
  }, [items, category]);

  return (
    <div className="w-full text-sm" key={title}>
      <Combobox
        value={selectedItems}
        onChange={(items) =>
          dispatch(
            questionActions.updateFilters({ filter: category, value: items })
          )
        }
        multiple
      >
        <div className="py-2 font-semibold">
          <Combobox.Label>Search by {title}:</Combobox.Label>
        </div>
        <div className="flex items-center ring-0 focus:outline-none py-2">
          <Combobox.Input
            onChange={onChangeHandler}
            className="w-full rounded-md focus:outline-none p-0.5 px-2 shadow-md border border-theme-blue-shade"
          />
          <button className="ml-2 focus:outline-none" onClick={openHandler}>
            <UpDownIcon />
          </button>
        </div>
        <Transition
          show={menuOpen}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {listItems.length > 0 ? (
            <div className="py-2 gap-y-2 max-h-[250px] overflow-auto">
              <Combobox.Options>
                {listItems.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    className="overflow-auto hover:cursor-pointer hover:bg-gray-200 bg-opacity-70 p-2 text-xs text-theme-blue flex flex-row justify-between"
                    value={item}
                  >
                    {item.title}
                    {selectedItems.includes(item) && <CheckIcon />}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </div>
          ) : (
            <div className="py-2">
              <p> No submitted entries for now</p>
            </div>
          )}
        </Transition>
      </Combobox>
    </div>
  );
}

export default MenuList;
