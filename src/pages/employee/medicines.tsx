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
import { getEmployeeLayout } from "../../components/EmployeeLayout";
import PaginationComponent from "../../components/PaginationComponent";
import TableComponent from "../../components/TableComponent";
import TableFilter from "../../components/TableFilter";

const EmployeeMedicines = () => {
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
    { label: "Category", column: "category", width: "15%" },
    { label: "Stocks", column: "quantity", width: "15%" },
    { label: "Expiration Date", column: "expirationDate", width: "15%" },
    {
      label: "",
      width: "15%",
      render: () => (
        <div className="w-46">
          <Link href="/employee/medicines/handout" passHref>
            <PrimaryButton title="Handout" setColor />
          </Link>
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
          <Link href="/employee/medicines/pending">
            <PrimaryButton title="View Lists" />
          </Link>
        </div>
      </div>
      <TableComponent data={data} columns={columns} />
      <PaginationComponent page={page} numberOfPages={10} />
    </div>
  );
};

EmployeeMedicines.getLayout = getEmployeeLayout;

export default EmployeeMedicines;
