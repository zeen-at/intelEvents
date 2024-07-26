import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

interface IForm {
  placeholder: string;
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "number" | "password" | "email";
  error?: string;
}

const CustomInput = ({
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  type,
  error,
}: IForm) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="border-b border-b-orange-800 px-4 w-full flex flex-row justify-between">
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          type={type === "password" && showPassword ? "text" : type}
          className="outline-none w-full"
        />
        {type === "password" ? (
          <button onClick={handleToggle} type="button">
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        ) : (
          ""
        )}
      </div>
      {error && (
        <div className="font-bold text-red-700 text-center items-center ">
          {error}
        </div>
      )}
    </>
  );
};

export default CustomInput;
