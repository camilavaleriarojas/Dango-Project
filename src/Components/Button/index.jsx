const AddButton = ({ onClick }) => {
  return (
    <>
      <button
        className=" h-9 w-full border border-gray-300   bg-stone-300 text-sm hover:bg-dark-pink"
        onClick={onClick}
      >
        Add to cart
      </button>
    </>
  );
};

export default AddButton;
