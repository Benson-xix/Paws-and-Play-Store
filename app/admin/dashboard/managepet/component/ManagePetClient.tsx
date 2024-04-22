"use client";

import ActionBtn from "@/app/component/ActionBtn";
import { IPet } from "@/models/Pet";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";

interface ManagePetsClientProps {
  pets: IPet[];
}

const ManagePetClient: React.FC<ManagePetsClientProps> = ({ pets }) => {
  const router = useRouter();
  let rows: any = [];

  if (pets) {
    rows = pets.map((pet) => {
      return {
        id: pet._id,
        name: pet.petName,
        price: pet.petPrice,
        category: pet.petCategory,
        subcategory: pet.petSubcategory,
      };
    });
  }

  const columns : GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "price",
      headerName: "Price(NGN)",
      width: 150,

      renderCell: (params) => {
        return (
          <div className='font-bold text-slate-800'>N{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 150 },
    { field: "subcategory", headerName: "Subcategory", width: 150 },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='flex justify-between mt-2 items-center gap-4 w-full '>
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                handleDelete(params.row.id, router);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/pet/${params.row.id}`);
              }}
            />
          </div>
        );
      },
    },
  ]

  const handleDelete = async (id: string, router: any) => {
    try {
      const res = await fetch(`/api/pet/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status < 400) {
        toast.success("Pet has been removed");
      router.refresh();
      }
    } catch (err) {
      toast.error("Failed to remove pet");
      console.log(err);
    }
  };

  return <div className='max-w-[1150px] m-auto text-xl'>
    <div className='mb-4 mt-8'>
        <h1>Manage Your Pets</h1>
      </div>

      <div style={{ height: 600, width: "100%" }}>
      <DataGrid
  rows={rows}
  columns={columns}
  getRowId={(row : any) => row.id} 
  initialState={{
    pagination: {
      paginationModel: { page: 0, pageSize: 9 },
    },
  }}
  pageSizeOptions={[9, 20]}
  checkboxSelection
  disableRowSelectionOnClick
/>

      </div>
  </div>;
};

export default ManagePetClient;
