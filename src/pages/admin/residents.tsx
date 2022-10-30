import Image from "next/image";
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
import { logo } from "../../images";

const Residents = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const columns = [
    {
      label: "Image",
      width: "15%",
      render: () => (
        <div className="w-56">
          <Image src={logo} alt="" width="60" height="60" />
        </div>
      ),
    },
    { label: "Full Name", column: "fullName", width: "25%" },
    { label: "Category", column: "category", width: "20" },
    { label: "Street", column: "street", width: "20%" },
    {
      label: "",
      width: "15%",
      render: () => (
        <div className="w-56">
          <Link href="/admin/residents/view" passHref>
            <ViewButton />
          </Link>
          <Link href="/admin/residents/edit" passHref>
            <EditButton />
          </Link>
          <DeleteButton onClick={() => setShowConfirm(true)} />
        </div>
      ),
    },
  ];

  const data = [
    {
      fullName: "John Benedict Taruc Regore",
      category: "Binata",
      street: "855 Proper",
    },
    {
      fullName: "John Benedict Taruc Regore",
      category: "Binata",
      street: "855 Proper",
    },
    {
      fullName: "John Benedict Taruc Regore",
      category: "Binata",
      street: "855 Proper",
    },
    {
      fullName: "John Benedict Taruc Regore",
      category: "Binata",
      street: "855 Proper",
    },
    {
      fullName: "John Benedict Taruc Regore",
      category: "Binata",
      street: "855 Proper",
    },
  ];

  const filterData = [
    {
      label: "Category",
      options: ["Category 1", "Category 2"],
      type: "select",
    },
  ];

  const router = useRouter();
  const { page } = router.query || 1;

  const handleDeleteResident = () => {
    alert("RESIDENT DELETED");
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
          <Link href="/admin/residents/add">
            <PrimaryButton title="Add Resident" />
          </Link>
        </div>
      </div>
      <TableComponent data={data} columns={columns} />
      <PaginationComponent page={page} numberOfPages={10} />

      {showConfirm && (
        <DeleteConfirmation
          closeModal={setShowConfirm}
          title="Are you sure you want to delete this resident?"
          onAccept={handleDeleteResident}
        />
      )}
    </div>
  );
};

Residents.getLayout = getLayout;

export default Residents;
