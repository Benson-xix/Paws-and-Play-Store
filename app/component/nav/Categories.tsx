"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Contain from "../Contain";
import Category from "./Category";
import { categories } from "@/Utils/Categories";

const Categories = () => {
    const params = useSearchParams();
  const category = params?.get("category");

  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;


  return <div className="bg-teal-200 border border-b-orange-300 pb-3">
    <Contain>
        <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto '>
        {categories.map((item) => (
            <Category
            key={item.label}
            label={item.label}
            value={item.value}
            icon={item.icon}
            selected={
              category === item.value ||
              (category === null && item.value === "All")
            }
          />
        ))}
        </div>
    </Contain>
  </div>;
};

export default Categories;
