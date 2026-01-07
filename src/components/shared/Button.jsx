function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  color = "amber",
  disabled = false,
  ...props
}) {
  const variants = {
    primary: "font-medium px-6 py-2 rounded-lg transition-all duration-300",
    secondary: "border-2 rounded-lg font-medium transition-all duration-300",
  };

  const colors = {
    amber:
      "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl",
    blue: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl",
    slate:
      "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-slate-300 text-slate-700 hover:bg-slate-50",
  };

  const baseClasses = `${variants[variant]} ${colors[color]} disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
