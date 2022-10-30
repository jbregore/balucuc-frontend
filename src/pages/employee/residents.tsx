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
import { getEmployeeLayout } from "../../components/EmployeeLayout";
import PaginationComponent from "../../components/PaginationComponent";
import TableComponent from "../../components/TableComponent";
import TableFilter from "../../components/TableFilter";
import { logo } from "../../images";

const EmployeeResidents = () => {
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
    { label: "Category", column: "category", width: "25" },
    {
      label: "Street",
      width: "25%",
      center: true,
      render: () => (
        <div className="text-center pl-6">
          <p className="py-3 px-2 leading-[24px] font-normal text-[14px]">
            855 Proper{" "}
          </p>
        </div>
      ),
    },
    {
      label: "",
      width: "10%",
      render: () => (
        <div className="w-56">
          <Link href="/employee/residents/view" passHref>
            <ViewButton />
          </Link>
          <Link href="/employee/residents/edit" passHref>
            <EditButton />
          </Link>
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
    {
      label: "Street",
      options: ["Street 1", "Street 2"],
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
          <Link href="/employee/residents/add">
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

EmployeeResidents.getLayout = getEmployeeLayout;

export default EmployeeResidents;
