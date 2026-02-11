import React, { useState } from "react";
import { Collapse } from "react-collapse";
import IconButton from "@mui/material/IconButton";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";
import "./style.css";
function SidePanel({ fn = () => {} }) {
  const [isOpened, setIsOpened] = useState(true);
  const [isAvailabilityOpened, setAvailabilityOpened] = useState(false);
  const [isSizeOpened, setSizeOpened] = useState(false);
  const [categories, setCategories] = useState([
    "Fashion",
    "books",
    "ds",
    "fb",
    "t5",
    "kj",
    "ry",
  ]);
  const [value, setValue] = React.useState(2);
  const onChangeSC = (e) => {
    console.log(e);
  };
  return (
    <aside className="min-w-[230px] max-w-[250px] h-auto overflow-auto pr-4 border-r pt-4">
      {/* Category */}
      {/* Sort by Category */}
      <div className="py-1 flex items-center justify-between">
        <h3 className="font-semibold text-sm text-darkGray">
          Sort by Category
        </h3>
        <IconButton
          aria-label="delete"
          onClick={() => setIsOpened(!isOpened)}
          size="small"
        >
          {isOpened ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </IconButton>
      </div>
      <Collapse isOpened={isOpened}>
        <div>
          <ul className="flex flex-col gap-2 max-h-[250px] overflow-auto">
            {categories.map((e) => (
              <li
                className="text-sm flex items-center"
                key={e}
                onChange={() => onChangeSC(e)}
              >
                <Checkbox
                  size="small"
                  color="red"
                  className="m-0 p-0 w-7 h-7"
                  slotProps={{
                    input: { "aria-label": "controlled" },
                  }}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "#ef0f0f",
                    },
                  }}
                />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>

      {/* Availability */}
      {/* Sort by Category */}
      <div className="py-1 flex items-center justify-between  mt-3">
        <h3 className="font-semibold text-sm text-darkGray">
          Sort by Availability
        </h3>
        <IconButton
          aria-label="delete"
          onClick={() => setAvailabilityOpened(!isAvailabilityOpened)}
          size="small"
        >
          {isAvailabilityOpened ? (
            <IoIosArrowUp size={20} />
          ) : (
            <IoIosArrowDown size={20} />
          )}
        </IconButton>
      </div>
      <Collapse isOpened={isAvailabilityOpened}>
        <div>
          <ul className="flex flex-col gap-2 max-h-[250px] overflow-auto">
            {categories.map((e) => (
              <li
                className="text-sm flex items-center"
                key={e}
                onChange={() => onChangeSC(e)}
              >
                <Checkbox
                  size="small"
                  color="red"
                  className="m-0 p-0 w-7 h-7"
                  slotProps={{
                    input: { "aria-label": "controlled" },
                  }}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "#ef0f0f",
                    },
                  }}
                />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>

      {/* isSizeOpened */}
      {/* Sort by isSizeOpened */}
      <div className="py-1 flex items-center justify-between  mt-3">
        <h3 className="font-semibold text-sm text-darkGray">Sort by Size</h3>
        <IconButton
          aria-label="delete"
          onClick={() => setSizeOpened(!isSizeOpened)}
          size="small"
        >
          {isSizeOpened ? (
            <IoIosArrowUp size={20} />
          ) : (
            <IoIosArrowDown size={20} />
          )}
        </IconButton>
      </div>
      <Collapse isOpened={isSizeOpened}>
        <div>
          <ul className="flex flex-col gap-2 max-h-[250px] overflow-auto">
            {categories.map((e) => (
              <li
                className="text-sm flex items-center"
                key={e}
                onChange={() => onChangeSC(e)}
              >
                <Checkbox
                  size="small"
                  color="red"
                  className="m-0 p-0 w-7 h-7"
                  slotProps={{
                    input: { "aria-label": "controlled" },
                  }}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "#ef0f0f",
                    },
                  }}
                />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>

      {/* Price */}
      <div className=" mt-3">
        <div className="py-1 flex items-center justify-between">
          <h3 className="font-semibold text-sm text-darkGray">Price</h3>
        </div>
        <RangeSlider value={0} />
        <div className="flex justify-between mt-2">
          <div className="text-xs font-semibold text-dark-trial">
            Starts 400
          </div>
          <div className="text-xs font-semibold text-dark-trial">
            Starts 1200
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className=" mt-3">
        <div className="py-1 flex items-center justify-between">
          <h3 className="font-semibold text-sm text-darkGray">Rating</h3>
        </div>
        <Rating
          name="simple-controlled"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </aside>
  );
}

export default SidePanel;
