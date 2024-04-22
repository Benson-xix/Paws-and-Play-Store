"use client";

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { categories } from "@/Utils/Categories";

interface CategoryProps {
  label: string;
  icon: IconType;
  value: string;
  selected?: boolean;
}   

const Category: React.FC<CategoryProps> = ({ label, value,  icon: Icon, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>)  => {
      event.preventDefault();
  
      if (label === "All") {
        router.push("/");
      } else {
        let currentQuery = {};
  
        if (params) {
          currentQuery = queryString.parse(params.toString());
        }
  
        const updatedQuery: any = {
          ...currentQuery,
          category: value,
        };
  
        const url = queryString.stringifyUrl(
          {
            url: "/",
            query: updatedQuery,
          },
          {
            skipNull: true,
          }
        );
  
        router.push(url);
      }
    },
    [label, value, params, router]
  );
  

  const handleSubcategoryClick = (subcategoryLabel: string) => {
    router.push(`/?category=${value}&subcategory=${subcategoryLabel}`);
  };

  const subcategories = categories.find((cat) => cat.label === label)?.subcategories;


  
  return (
    <div >
      <div
        onClick={handleClick}
        className={`flex md:flex-row flex-col items-center justify-center   text-center gap-1 p-4 border-b-2 transition cursor-pointer ${
          selected
            ? "border-b-teal-200 border-b-2 text-teal-200 bg-orange-300 rounded-md"
            : "border-transparent text-orange-500"
        }`}
      >
        <Icon size={40} />
        <div className="font-medium text-lg">{label}</div>
      </div>
      {selected && subcategories && (
        <div className="absolute  top-full left-0 bg-orange-300 border border-gray-200 flex w-full justify-between  shadow-lg overflow-x-auto ">
          {subcategories.map((subcategory) => (
            <div
              key={subcategory.label}
              className="flex items-center justify-center text-center p-2  cursor-pointer"
              onClick={() => handleSubcategoryClick(subcategory.label)}
            >
               <Icon size={20} />
              <div className="ml-2 text-sm">{subcategory.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
