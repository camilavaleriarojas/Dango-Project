import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="flex h-16 items-center justify-between bg-slate-100 px-5">
        <div className="flex items-center">
          <img
            src="src/assets/soap.png"
            alt="soap"
            className="mx-3 h-10 w-10"
          />
          <h1 className="text-lg font-bold">Tourmaline</h1>
        </div>
        <div className="flex items-center">
          <BsCart2 />
          <p className="text-gray ml-2.5 h-5 w-5 rounded-full bg-gray-200 text-center text-sm">
            1
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
