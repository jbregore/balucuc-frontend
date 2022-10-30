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

const Vaccines = () => {
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
    { label: "Vaccine Name", column: "vaccineName", width: "17%" },
    { label: "Category", column: "category", width: "15%" },
    { label: "Quantity", column: "quantity", width: "10%" },
    { label: "Manufactured Date", column: "manufacturedDate", width: "18%" },
    { label: "Expiration Date", column: "expirationDate", width: "15%" },
    {
      label: "",
      width: "20%",
      render: () => (
        <div className="w-56">
          <Link href="/admin/vaccines/view" passHref>
            <ViewButton />
          </Link>
          <Link href="/admin/vaccines/edit" passHref>
            <EditButton />
          </Link>
          <DeleteButton onClick={() => setShowConfirm(true)} />
        </div>
      ),
    },
  ];

  const data = [
    {
      vaccineName: "Astrazenica",
      quantity: 500,
      category: "Covid",
      manufacturedDate: "09-10-2022",
      expirationDate: "10-30-2022",
    },
    {
      vaccineName: "Astrazenica",
      quantity: 500,
      category: "Covid",
      manufacturedDate: "09-10-2022",
      expirationDate: "10-30-2022",
    },
    {
      vaccineName: "Astrazenica",
      quantity: 500,
      category: "Covid",
      manufacturedDate: "09-10-2022",
      expirationDate: "10-30-2022",
    },
    {
      vaccineName: "Astrazenica",
      quantity: 500,
      category: "Covid",
      manufacturedDate: "09-10-2022",
      expirationDate: "10-30-2022",
    },
    {
      vaccineName: "Astrazenica",
      quantity: 500,
      category: "Covid",
      manufacturedDate: "09-10-2022",
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

  const handleDeleteVaccine = () => {
    alert("Vaccine DELETED");
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
          <Link href="/admin/vaccines/add">
            <PrimaryButton title="Add Vaccine" />
          </Link>
        </div>
      </div>
      <TableComponent data={data} columns={columns} />
      <PaginationComponent page={page} numberOfPages={10} />

      {showConfirm && (
        <DeleteConfirmation
          closeModal={setShowConfirm}
          title="Are you sure you want to delete this vaccine?"
          onAccept={handleDeleteVaccine}
        />
      )}
    </div>
  );
};

Vaccines.getLayout = getLayout;

export default Vaccines;
