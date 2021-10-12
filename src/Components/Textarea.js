function Textarea({ value, handleOnTaskDesChange, ...props }) {
  return (
    <textarea
      type='text'
      placeholder='Type here'
      value={value}
      onInput={handleOnTaskDesChange}
      {...props}
    />
  );
}

export default Textarea;
