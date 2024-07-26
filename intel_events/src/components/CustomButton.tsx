import React from "react";

interface IButton {
  title: string;
  otherStyles?: string;
  handleClick?: any;
  type: "submit" | "button" | "reset";
  disabled?: boolean;
}

const CustomButton = ({
  disabled,
  type,
  title,
  otherStyles,
  handleClick,
}: IButton) => {
  return (
    <button
      disabled={disabled}
      className={`${otherStyles} font-semibold py-2 px-6 bg-orange-600 border border-orange-600 text-slate-200 rounded-sm hover:bg-orange-300 hover:text-orange-600`}
      onClick={handleClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default CustomButton;
