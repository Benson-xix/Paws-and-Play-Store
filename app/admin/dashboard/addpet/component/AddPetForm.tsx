"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { categories } from "@/Utils/Categories";


interface FormData {
  petName: string;
  petDescription: string;
  petCategory: string;
  petSubcategory: string;
  petColor: string;
  petImages: string[];
  petGender: string;
  petPrice: string;
  petDateOfBirth: string;
  petAge: string;
  petStatus: string;
}

const AddPetForm = () => {
  const [images, setImages] = useState<any[]>([]);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    petName: "",
    petDescription: "",
    petCategory: "",
    petSubcategory: "",
    petColor: "",
    petImages: [] as any,
    petGender: "",
    petPrice: "",
    petDateOfBirth: "",
    petAge: "",
    petStatus: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement  | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategorySelect = (category: any) => {
    setFormData((prevData) => ({
      ...prevData,
      petCategory: category,
    }));
  };

  const handleSubcategorySelect = (subcategory: any) => {
    setFormData((prevData) => ({
      ...prevData,
      petSubcategory: subcategory,
    }));
  };

  const convertFileToBase64 = (file: File) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", (result) => resolve(reader.result));
      reader.readAsDataURL(file);
    });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const links : any[] = [];
     Array.from(files).forEach(async (file) => {
      const result = await convertFileToBase64(file)
      links.push(result);
      });
      setImages(links );
    }
  };

  const [showAlert, setShowAlert] = useState(false);

  const clearForm = () => {
    const form = document.getElementById("addPetForm") as HTMLFormElement;
    form.reset();
  };

  useEffect(() => {
    if (!loading && showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
        clearForm();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [loading, showAlert]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const petName = formData.get("petName") as string;
    const petDescription =  formData.get("petDescription") as string;
    const petCategory = formData.get("petCategory") as string;
    const petSubcategory = formData.get("petSubcategory") as string;
    const petColor = formData.get("petColor") as string;
    const petImages = images;
    const petGender = formData.get("petGender") as string;
    const petPrice = formData.get("petPrice") as string;
    const petDateOfBirth = formData.get("petDateOfBirth") as string;
    const petAge = formData.get("petAge") as string;
    const petStatus = formData.get("petStatus") as string;

    setLoading(true);

    try {
      const res = await fetch("/api/pet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          petName,
          petDescription,
          petCategory,
          petSubcategory,
          petColor,
          petImages,
          petGender,
          petPrice,
          petDateOfBirth,
          petAge,
          petStatus,
        }),
      });

      if (res.status < 400) {
        console.log("Pet created successfully");
        setShowAlert(true);
        setFormData({
          petName: "",
          petDescription: "",
          petCategory: "",
          petSubcategory: "",
          petColor: "",
          petImages: [] as any,
          petGender: "",
          petPrice: "",
          petDateOfBirth: "",
          petAge: "",
          petStatus: "",
        });
       

      } else {
        console.error("Failed to create pet");

        alert("Failed to create pet");
      }

      
    }  catch (error) {
      console.error("Error creating pet:", error);
      alert("Error creating pet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-orange-300 p-3 w-full justify-center  items-center">
      <h1 className="font-bold text-2xl text-gray-900">Add A New Pet</h1>
      {showAlert && <div className="alert">
      <div className="w-full  flex bg-teal-300 border border-gray-900 rounded-md items-center justify-center p-3">
      Pet Creation was successfully  added to the Database
     </div>
     </div>}

     <div className="w-full lg:w-1/2 flex bg-teal-300 border border-gray-900 rounded-md items-center justify-center ">

     </div>
      
      <form
        id="addPetForm"
        onSubmit={handleSubmit}
        className="flex flex-col w-[80%] h-full gap-[2rem] items-center mt-3"
      >
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <label className="flex text-left">Pet Name</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            required
            className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <label className="flex text-left">Pet Description</label>
          <textarea
            name="petDescription"
            value={formData.petDescription}
            onChange={handleChange}
            required
            className="w-full h-[100px] rounded-md p-2 border border-teal-300 outline-teal-400"
          />
          
        </div>
        <div className="lg:w-[50%]  w-full font-medium">
          <div className="mb-2 font-semibold">Select pet Category</div>
          <select
            name="petCategory"
            value={formData.petCategory}
            onChange={handleChange}
            required
            className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
          >
            <option value="">Select Category</option>
            {categories.map((item) => {
              if (item.label === "All") {
                return null;
              }
              return (
                <option key={item.label} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>

        {formData.petCategory && (
          <div className="lg:w-[50%]  w-full font-medium">
            <div className="mb-2 font-semibold">Select pet Subcategory (breed)</div>
            <select
              name="petSubcategory"
              value={formData.petSubcategory}
              onChange={handleChange}
              required
              className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
            >
              <option value="">Select Subcategory</option>
              {(
                (formData.petCategory &&
                  categories.find((cat) => cat.value === formData.petCategory)
                    ?.subcategories) ||
                []
              ).map((item) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <label className="flex text-left">Pet Color and Image</label>
          <div className="flex lg:flex-row flex-col gap-4 items-center">
            <input
              type="text"
              name="petColor"
              value={formData.petColor}
              onChange={handleChange}
              required
              className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
            />
            <input
              type="file"
              name="petImages"
              id="imagesd"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <label className="flex text-left">Pet Gender</label>
          <input
            type="text"
            name="petGender"
            value={formData.petGender}
            onChange={handleChange}
            required
            className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
          />
        </div>

        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <label className="flex text-left">Pet Price</label>
          <input
            type="text"
            name="petPrice"
            value={formData.petPrice}
            onChange={handleChange}
            required
            className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <label className="flex text-left">Pet Age </label>
          <input
            type="text"
            name="petAge"
            value={formData.petAge}
            onChange={handleChange}
            required
            className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <label className="flex text-left">Pet Date of Birth</label>
          <input
            type="date"
            name="petDateOfBirth"
            value={formData.petDateOfBirth}
            onChange={handleChange}
            required
            className="w-full h-[50px] rounded-md p-2 border border-teal-300 outline-teal-400"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <label className="flex text-left">Pet Status (crossbreeded or Not)</label>
          <input
            type="checkbox"
            name="petStatus"
            checked={formData.petStatus === "true"}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                petStatus: e.target.checked.toString(),
              }))
            }
            className="w-[20px] h-[20px] rounded-md p-2 outline-orange-300"
          />
        </div>
        <button
          type="submit"
          className="lg:w-1/4 md:w-1/2 rounded-md hover:bg-orange-300 hover:border-2 hover:border-teal-200 w-full h-[40px] bg-teal-200"
        >
          Add New Pet Data
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
