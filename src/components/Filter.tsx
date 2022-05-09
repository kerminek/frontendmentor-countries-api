import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const Filter = ({ selectedRegionSet, selectedRegion }: any) => {
  const [dropdown, dropdownSet] = useState<boolean>(false);
  // const [selected, selectedSet] = useState<string | null>(null);

  // Dropdown animation
  const props = useSpring({
    from: { x: 1 },
    x: dropdown ? 0 : 1,
    config: { duration: 300 },
  });

  return (
    // custom style={{transform:"translateZ(10px)"}} is for fixing the animation so it can be always on top
    <div className="text-[14px] font-[600] relative w-56" style={{ transform: "translateZ(10px)", zIndex: 50 }}>
      <div
        className="w-full bg-lmElems dark:bg-dmElems px-6 py-4 rounded shadow-md max-h-[53px] flex justify-between items-center cursor-pointer"
        onClick={() => dropdownSet(!dropdown)}
      >
        <span>{selectedRegion ? selectedRegion : "Filter by Region"}</span>
        <KeyboardArrowDownIcon />
      </div>
      <animated.div
        style={{
          rotateX: props.x.to({
            range: [0, 1],
            output: [0, -90],
          }),
        }}
        className="w-full bg-lmElems dark:bg-dmElems px-6 py-4 rounded shadow-md origin-top absolute top-[110%]"
      >
        <ul className="flex flex-col gap-2">
          <li
            className="cursor-pointer"
            onClick={(e) => {
              selectedRegionSet(null);
              dropdownSet(false);
            }}
          >
            All
          </li>
          <li
            className="cursor-pointer"
            onClick={(e) => {
              selectedRegionSet(e.currentTarget.innerText);
              dropdownSet(false);
            }}
          >
            Africa
          </li>
          <li
            className="cursor-pointer"
            onClick={(e) => {
              selectedRegionSet(`${e.currentTarget.innerText}s`);
              dropdownSet(false);
            }}
          >
            America
          </li>
          <li
            className="cursor-pointer"
            onClick={(e) => {
              selectedRegionSet(e.currentTarget.innerText);
              dropdownSet(false);
            }}
          >
            Asia
          </li>
          <li
            className="cursor-pointer"
            onClick={(e) => {
              selectedRegionSet(e.currentTarget.innerText);
              dropdownSet(false);
            }}
          >
            Europe
          </li>
          <li
            className="cursor-pointer"
            onClick={(e) => {
              selectedRegionSet(e.currentTarget.innerText);
              dropdownSet(false);
            }}
          >
            Oceania
          </li>
        </ul>
      </animated.div>
    </div>
  );
};

export default Filter;
