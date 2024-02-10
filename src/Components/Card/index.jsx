import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";
import { useContext } from "react";
import { Context } from "../../context/index";
import InputCuantity from "../Inputs/InputCuantity";

import AddButton from "../Button";
import TitleInput from "../Inputs/TitleInput";

const Card = ({ name, image, price, description }) => {
  const [title, setTitle] = useState(name);
  const [isEditing, setIsEditing] = useState(name);
  const [cuantityValue, setCuantityValue] = useState(1);
  const { titleSize, setAmount } = useContext(Context);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const handleAddToCart = () => {
    setAmount((prevAmount) => prevAmount + cuantityValue);
    setCuantityValue(1);
  };

  const handleCuantityChange = (event) => {
    setCuantityValue(Number(event.target.value));
  };

  return (
    <div className="w-56 rounded-sm border-stone-100 bg-white p-4 pt-2 shadow-md">
      <div className={"mb-1 flex items-center justify-between"}>
        <div className={!isEditing ? "visible w-full" : "invisible w-full"}>
          <TitleInput title={title} onTitleChange={onTitleChange} />
        </div>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? <BiSolidEdit /> : <FaCheck />}
        </button>
      </div>
      <div>
        <img
          src={image}
          alt="soap"
          className="rounded-xs opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <h2
          className={`mt-5 overflow-hidden break-words font-bold ${titleSize}`}
        >
          {title}
        </h2>
        <div className="flex py-3">
          <p className="mr-3 text-base font-bold">{`$${cuantityValue * price}`}</p>
          <InputCuantity
            value={cuantityValue}
            onChange={handleCuantityChange}
          />
        </div>
        <p className="text-justify text-xs font-medium">{description}</p>
      </div>
      <div className="flex flex-col items-center pt-5">
        <AddButton onClick={handleAddToCart} />
        <a className="cursor-pointer pt-2.5 text-sm underline">Learn More</a>
      </div>
    </div>
  );
};

export default Card;
