import { IStyledTextInput } from "./types";

export const TextInput = ({
  height,
  width,
  label,
  className,
  handleChange,
  register,
  placeholder,
}: IStyledTextInput) => {
  return (
    <label className="flex flex-col gap-4 font-semibold text-base text-[#260e3f]">
      {label}
      <input
        onChange={handleChange}
        className={`bg-transparent outline-none rounded-md bg-primary text-primary text-white font-medium text-base px-2 border border-white border-solid
        ${className}
        ${width ? `w-${width}` : "w-24"}
        ${height ? `h-${height}` : "h-10"}
        `}
        height={height}
        width={width}
        label={label}
        placeholder={placeholder}
        {...register}
      />
    </label>
  );
};

export default TextInput;
