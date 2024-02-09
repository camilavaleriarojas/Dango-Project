import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";
import { useContext } from "react";
import { TitleSizeContext } from "../TitleContext";
import Input from "../Input";

import AddButton from "../Button";
import TitleInput from "../TitleInput";

const Card = ({ name, image, price, description }) => {
  const [title, setTitle] = useState(name);
  const [isEditing, setIsEditing] = useState(name);

  const { titleSize } = useContext(TitleSizeContext);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  return (
    <div className="relative w-56 rounded-md border border-stone-100 bg-white p-4 pt-2 shadow-md  hover:border-stone-300 ">
      <div className={"mb-1 flex items-center justify-between"}>
        <div className={!isEditing ? "visible w-full" : "invisible w-full"}>
          <TitleInput title={title} onTitleChange={onTitleChange} />
        </div>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? <BiSolidEdit /> : <FaCheck />}
        </button>
      </div>
      <div className="">
        <img
          src={image}
          alt="soap"
          className="rounded-xs opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <h2 className={`mt-5 overflow-hidden font-bold ${titleSize}`}>
          {title}
        </h2>
        <div className="flex py-3">
          <p className="mr-3 text-base font-bold">{`$${price}`}</p>
          <Input />
        </div>
        <p className="text-justify text-xs font-medium">{description}</p>
      </div>
      <div className="flex flex-col items-center pt-5">
        <AddButton />
        <a className="cursor-pointer pt-2.5 text-sm underline">Learn More</a>
      </div>
    </div>
  );
};

export default Card;
