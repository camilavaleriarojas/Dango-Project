const AddButton = ({ onClick }) => {
  return (
    <>
      <button
        className="bg-dark h-8 w-full border-gray-300 text-sm text-white hover:bg-stone-900"
        onClick={onClick}
      >
        Add to cart
      </button>
    </>
  );
};

export default AddButton;
