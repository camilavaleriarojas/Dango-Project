import { useContext } from "react";
import { Context } from "../../../context";

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
    <div className="flex h-7 items-center justify-center rounded-3xl bg-white p-1">
      <input
        type="range"
        min={5}
        max={100}
        step={5}
        onChange={handleRangeChange}
        className="h-1 w-16 cursor-pointer appearance-none rounded-full border-transparent bg-gray-400"
        id="customRange"
      />
    </div>
  );
};

export default Range;
