const InputCuantity = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="number"
      min={1}
      defaultValue={1}
      className="w-10 border"
    />
  );
};

export default InputCuantity;
