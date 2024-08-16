import { forwardRef } from "react";

const Button = forwardRef(function Button({ children, ...props }, ref) {
  return (
    <button
      ref={ref}
      className="text-stone-950 bg-stone-400 w-10 h-10 ml-5 rounded-sm"
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
