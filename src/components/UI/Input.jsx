function Input({
  label,
  id,
  placeholder,
  ref,
  className = "",
  error,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={id}
        name={id}
        ref={ref}
        placeholder={placeholder}
        className={`px-4 py-2 border rounded-md focus:outline-main ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default Input;
