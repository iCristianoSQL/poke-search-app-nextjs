import { IStyledSelectInput } from "./types";

const SelectInput = ({
  height,
  width,
  options,
  label,
  register,
  className,
}: IStyledSelectInput) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-white">{label}</label>
      <select
        className={`outline-none rounded-md bg-transparent text-primary text-white font-medium text-base px-2 border border-white border-solid
        ${className}
        ${width ? `w-${width}` : "w-40"}
        ${height ? `h-${height}` : "h-8"}
        `}
        {...register}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-primary text-primary font-medium"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
