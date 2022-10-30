import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  DeleteButton,
  EditButton,
  PrimaryButton,
  SearchInput,
  ViewButton,
} from "../../components/Buttons";
import DeleteConfirmation from "../../components/Confirmation";
import { getLayout } from "../../components/Layout";
import PaginationComponent from "../../components/PaginationComponent";
import TableComponent from "../../components/TableComponent";
import TableFilter from "../../components/TableFilter";

const Medicines = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const columns = [
    {
      label: "Batch no",
      width: "10%",
      render: () => (
        <div className="text-left pl-6">
          <p className="py-3 px-2 leading-[24px] font-bold text-[14px]">1 </p>
        </div>
      ),
    },
    { label: "Brand Name", column: "brandName", width: "15%" },
    { label: "Generic Name", column: "genericName", width: "15%" },
    { label: "Category", column: "category", width: "20" },
    { label: "Quantity", column: "quantity", width: "10%" },
    { label: "Expiration Date", column: "expirationDate", width: "15%" },
    {
      label: "",
      width: "15%",
      render: () => (
        <div className="w-56">
          <Link href="/admin/medicines/view" passHref>
            <ViewButton />
          </Link>
          <Link href="/admin/medicines/edit" passHref>
            <EditButton />
          </Link>
          <DeleteButton onClick={() => setShowConfirm(true)} />
        </div>
      ),
    },
  ];

  const data = [
    {
      brandName: "Paracetamol",
      genericName: "Biogesic",
      category: "Gamot",
      quantity: 1000,
      expirationDate: "10-30-2022",
    },
    {
      brandName: "Paracetamol",
      genericName: "Biogesic",
      category: "Gamot",
      quantity: 1000,
      expirationDate: "10-30-2022",
    },
    {
      brandName: "Paracetamol",
      genericName: "Biogesic",
      category: "Gamot",
      quantity: 1000,
      expirationDate: "10-30-2022",
    },
  ];

  const filterData = [
    {
      label: "Batch no.",
      options: ["Batch 1", "Batch 2"],
      type: "select",
    },
    {
      label: "Category",
      options: ["Category 1", "Category 2"],
      type: "select",
    },
    {
      label: "Expiration Date",
      type: "date",
    },
  ];

  const router = useRouter();
  const { page } = router.query || 1;

  const handleDeleteMedicine = () => {
    alert("MEDICINE DELETED");
    setShowConfirm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-end mb-4">
        <div className="flex items-center">
          {filterData.map((item, index) => (
            <TableFilter
              label={item.label}
              type={item.type}
              key={index}
              options={item.options}
            />
          ))}
        </div>

        <div className="flex items-center">
          <div className="mr-6">
            <SearchInput />
          </div>
          <Link href="/admin/medicines/add">
            <PrimaryButton title="Add Medicine" />
          </Link>
        </div>
      </div>
      <TableComponent data={data} columns={columns} />
      <PaginationComponent page={page} numberOfPages={10} />

      {showConfirm && (
        <DeleteConfirmation
          closeModal={setShowConfirm}
          title="Are you sure you want to delete this medicine?"
          onAccept={handleDeleteMedicine}
        />
      )}
    </div>
  );
};

Medicines.getLayout = getLayout;

export default Medicines;
