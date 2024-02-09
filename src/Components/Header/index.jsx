import { BsCart2 } from "react-icons/bs";
import Range from "../Inputs/Range";
import { useContext } from "react";
import { Context } from "../../context/index";

const Header = () => {
  const { amount } = useContext(Context);

  return (
    <div className="mb-5 flex h-16 items-center justify-between bg-stone-300 px-5">
      <div className="flex items-center">
        <img src="src/assets/soap.png" alt="soap" className="mx-3 h-10 w-10" />
        <h1 className="text-lg font-bold">Tourmaline</h1>
      </div>
      <div className="flex">
        <Range />
        <div className="ml-2 flex w-16 items-center justify-center rounded-3xl bg-white p-1">
          <BsCart2 />
          <p className="text-gray ml-2 h-5 w-5 rounded-full bg-gray-200 text-center text-sm">
            {amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
