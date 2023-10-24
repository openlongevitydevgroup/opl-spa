import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { questionActions } from "../../../state/Question/questionSlice";
import { formActions } from "../../../state/Question/questionFormSlice";
import { useDispatch, useSelector } from "react-redux";
import Fuse from "fuse.js";

const SearchBar = ({ label, type = "text", value, onChange, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value;

  return (
    <div className="relative w-full py-1">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-2 bg-gray-300 bg-opacity-30 shadow border-b rounded-t-md outline-none transition-all duration-300 ${
          isActive ? "pt-4" : ""
        } ${
          isFocused ? "border-indigo-500 shadow-theme-blue" : "border-gray-300"
        } `}
        {...rest}
      />
      {label && (
        <label
          className={`absolute left-3 bg-transparent transition-all duration-300 pointer-events-none bg-white px-1 ${
            isActive
              ? "top-1 text-xs text-indigo-500"
              : "top-5 text-sm text-gray-500"
          }`}
          style={{ transformOrigin: "0 0" }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default SearchBar;
