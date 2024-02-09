import AddButton from "../Button";

const Card = ({ name, image, price, description }) => {
  return (
    <div className="relative w-56 rounded-md border border-stone-300 p-4 shadow-xl  hover:border-stone-400 ">
      <div className="">
        <img
          src={image}
          alt="soap"
          className="rounded-md opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100"
        />
        <h2 className="mt-5 text-lg font-bold">{name}</h2>
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
