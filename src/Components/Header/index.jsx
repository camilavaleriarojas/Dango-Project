import { BsCart2 } from "react-icons/bs";
import Range from "../Inputs/Range";
import { useContext } from "react";
import { Context } from "../../context/index";

const Header = () => {
  const { amount } = useContext(Context);

  return (
    <div className="bg-light sticky top-0 z-50 mb-5 flex h-16 items-center justify-between px-5">
      <div className="flex items-center">
        <img src="/assets/soap.png" alt="soap" className="mx-2" />
        <h1 className="hidden text-xl text-white sm:block">Tourmaline</h1>
      </div>
      <div className="flex">
        <Range />
        <div className="ml-2 flex w-16 items-center justify-center rounded-lg bg-white p-1">
          <BsCart2 />
          <p className="ml-1 text-sm">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
