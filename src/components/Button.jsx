import React from "react";

const Button = ({ className = "", size = "default", children }) => {
  const baseClassName =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClassName = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-default",
    lg: "px-8 py-4 text-lg",
  };

  // add `${}` to apply variable to string
  const classNameFinal = `${baseClassName} ${sizeClassName[size]} ${className}`;

  return (
    <button className={classNameFinal}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
