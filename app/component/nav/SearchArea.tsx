"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchArea = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues: {
          searchTerm: "",
        },
      });

      
  const onSubmit: SubmitHandler<FieldValues> = async (pet) => {
    if (!pet.searchTerm) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: pet.searchTerm,
        },
      },
      { skipNull: true }
    );

    console.log(url);
    router.push(url);
    reset();
  };
 
  return <div className="flex items-center">
        <input
          {...register("searchTerm")}
          type='text'
          autoComplete='off'
          placeholder='Search for your Pawed Buddy'
          className='p-2 border text-gray-900 border-gray-300 rounded-l-md  focus:outline-none focus:border-[0.5px] focus:border-teal-500  w-80 '
        />
        <button
          onClick={handleSubmit(onSubmit)}
          className='bg-orange-300 border-teal-200 border-2  hover:opacity-80 text-white p-2 rounded-r-md'
        >
          Search
        </button>
  </div>;
};

export default SearchArea;
