import { IButton } from "./types";

export const Button = ({ label, children, handleClick }: IButton) => {
  return (
    <button
      onClick={handleClick}
      className="border-b border-white border-solid text-white"
    >
      <div className="flex gap-2">
        {label}
        {children}
      </div>
    </button>
  );
};
