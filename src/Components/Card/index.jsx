import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";

import AddButton from "../Button";
import TitleInput from "../TitleInput";

const Card = ({ name, image, price, description }) => {
  const [title, setTitle] = useState(name);
  const [isEditing, setIsEditing] = useState(name);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  return (
    <div className="relative w-56 rounded-md border border-stone-300 p-4 pt-2 shadow-xl  hover:border-stone-400 ">
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
          className="rounded-md opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <h2 className="mt-5 overflow-hidden text-lg font-bold">{title}</h2>
        <div className="flex py-3">
          <p className="mr-3 text-base font-bold">{`$${price}`}</p>
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-10 border"
          />
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
