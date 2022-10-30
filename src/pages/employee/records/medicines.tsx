import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  ViewButton,
  EditButton,
  DeleteButton,
  SearchInput,
  PrimaryButton,
} from "../../../components/Buttons";
import DeleteConfirmation from "../../../components/Confirmation";
import { getEmployeeLayout } from "../../../components/EmployeeLayout";
import PaginationComponent from "../../../components/PaginationComponent";
import TableComponent from "../../../components/TableComponent";
import TableFilter from "../../../components/TableFilter";

const EmployeeRecordsMedicines = () => {
  const columns = [
    { label: "Resident Full Name", column: "residentName", width: "20%" },
    { label: "Brand Name", column: "brandName", width: "20%" },
    { label: "Generic Name", column: "genericName", width: "20%" },
    { label: "Info", column: "info", width: "15%" },
    { label: "Quantity", column: "quantity", width: "10%" },
    { label: "Date Given", column: "dateGiven", width: "25%" },
  ];

  const data = [
    {
      residentName: "John Benedict Taruc Regore",
      brandName: "Paracetamol",
      genericName: "Biogesic",
      info: "500mg",
      quantity: 25,
      dateGiven: "10-30-2022",
    },
    {
      residentName: "John Benedict Taruc Regore",
      brandName: "Paracetamol",
      genericName: "Biogesic",
      info: "500mg",
      quantity: 25,
      dateGiven: "10-30-2022",
    },
    {
      residentName: "John Benedict Taruc Regore",
      brandName: "Paracetamol",
      genericName: "Biogesic",
      info: "500mg",
      quantity: 25,
      dateGiven: "10-30-2022",
    },
    {
      residentName: "John Benedict Taruc Regore",
      brandName: "Paracetamol",
      genericName: "Biogesic",
      info: "500mg",
      quantity: 25,
      dateGiven: "10-30-2022",
    },
    {
      residentName: "John Benedict Taruc Regore",
      brandName: "Paracetamol",
      genericName: "Biogesic",
      info: "500mg",
      quantity: 25,
      dateGiven: "10-30-2022",
    },
  ];

  const filterData = [
    {
      label: "Brand Name",
      options: ["Category 1", "Category 2"],
      type: "select",
    },
    {
      label: "Generic Name",
      options: ["Category 1", "Category 2"],
      type: "select",
    },
    {
      label: "Date Given",
      type: "date",
    },
  ];

  const router = useRouter();
  const { page } = router.query || 1;

  return (
    <div>
      <div className="flex justify-between items-end mb-4">
        <div className="flex items-center">
          <p className="font-bold text-[20px] text-[#525F7F] leading-[23px]">
            Medicine Records
          </p>
          <div className="ml-6">
            <SearchInput />
          </div>
        </div>

        <div className="flex items-center -mr-6">
          {filterData.map((item, index) => (
            // <p key={index}>{item.options}</p>
            <TableFilter
              label={item.label}
              type={item.type}
              key={index}
              options={item.options}
            />
          ))}
        </div>
      </div>
      <TableComponent data={data} columns={columns} />
      <PaginationComponent page={page} numberOfPages={10} />
    </div>
  );
};

EmployeeRecordsMedicines.getLayout = getEmployeeLayout;

export default EmployeeRecordsMedicines;
