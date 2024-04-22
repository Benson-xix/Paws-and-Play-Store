"use client";

import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  selected?: boolean;
  label: string;
  icon: IconType;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  selected,
  label,
  icon: Icon,
  onClick,
}) => {
  return (
    <option
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-4 text-white bg-slate-900 flex flex-col items-center gap-2 hover:border-teal-200 transition cursor-pointer  w-full ${
        selected ? "border-teal-200" : "border-orange-300"
      }`}
    >
      <Icon size={30} />
      <div className='font-medium '>{label}</div>
    </option>
  );
};

export default CategoryInput;
