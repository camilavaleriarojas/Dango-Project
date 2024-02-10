const TitleInput = ({ onTitleChange }) => {
  return (
    <input
      className="w-full text-xs outline-none"
      placeholder="Edit text title"
      onChange={onTitleChange}
      maxLength={40}
    />
  );
};

export default TitleInput;
