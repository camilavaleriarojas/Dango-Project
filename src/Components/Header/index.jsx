const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-slate-100 h-16 px-5">
        <div className="flex items-center">
          <img
            src="src/assets/soap.png"
            alt="soap"
            className="w-10 h-10 mx-3"
          />
          <h1 className="text-lg font-bold">Tourmaline</h1>
        </div>
        <div className="flex items-center">
          <img
            src="src/assets/shopping-cart.png"
            alt="cart"
            className="w-6 h-6"
          />
          <p className="ml-2.5 bg-gray-200 w-5 h-5 rounded-full text-gray text-center text-sm">
            1
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
