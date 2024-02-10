const InputCuantity = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="number"
      min={1}
      max={25}
      defaultValue={1}
      className="w-10 border text-center"
      onKeyDown={(event) => {
        event.preventDefault();
      }}
    />
  );
};

export default InputCuantity;
