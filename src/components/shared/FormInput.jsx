function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={label}
        className={`w-full px-4 py-2 border rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-0 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-slate-300 focus:ring-slate-700 focus:border-transparent"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default FormInput;
