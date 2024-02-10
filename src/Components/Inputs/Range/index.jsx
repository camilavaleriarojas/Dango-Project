import { useContext } from "react";
import { Context } from "../../../context/index";
import { Tooltip } from "react-tooltip";

const Range = () => {
  const { setTitleSize } = useContext(Context);

  const handleRangeChange = (event) => {
    let fontSizeValue;
    const inputValue = event.target.value;

    switch (true) {
      case inputValue <= 30:
        fontSizeValue = "text-xs";
        break;
      case inputValue <= 50:
        fontSizeValue = "text-sm";
        break;
      case inputValue <= 80:
        fontSizeValue = "text-base";
        break;
      default:
        fontSizeValue = "text-lg";
        break;
    }

    setTitleSize(fontSizeValue);
  };

  return (
    <div className="flex h-7 items-center justify-center rounded-lg bg-white p-1 accent-light">
      <input
        type="range"
        min={5}
        max={100}
        step={5}
        onChange={handleRangeChange}
        className="h-1 w-16 cursor-pointer appearance-none rounded-full border-transparent bg-gray-400"
        data-tooltip-id="range-tooltip"
        data-tooltip-content="Edit size title"
        data-tooltip-place="bottom"
      />
      <Tooltip id="range-tooltip" />
    </div>
  );
};

export default Range;
