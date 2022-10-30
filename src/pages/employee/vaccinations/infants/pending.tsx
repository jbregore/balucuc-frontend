import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  EditButton,
  DeleteButton,
  SearchInput,
} from "../../../../components/Buttons";
import DeleteConfirmation from "../../../../components/Confirmation";
import { getEmployeeLayout } from "../../../../components/EmployeeLayout";
import PaginationComponent from "../../../../components/PaginationComponent";
import TableComponent from "../../../../components/TableComponent";
import TableFilter from "../../../../components/TableFilter";

const EmployeePendingInfants = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const columns = [
    { label: "Name", column: "name", width: "25%" },
    { label: "Vaccine Name", column: "vaccineName", width: "15%" },
    { label: "Category", column: "category", width: "15" },
    { label: "Vaccination Date", column: "vaccinationDate", width: "15%" },
    { label: "Transaction Date", column: "transactionDate", width: "15%" },
    {
      label: "",
      width: "15%",
      render: () => (
        <div className="w-46">
          <Link href="/employee/vaccinations/infants/edit" passHref>
            <EditButton />
          </Link>
          <DeleteButton onClick={() => setShowConfirm(true)} />
        </div>
      ),
    },
  ];

  const data = [
    {
      name: "Baby Kulot",
      vaccineName: "FluVac",
      category: "Anti Flu",
      vaccinationDate: "10-30-2022",
      transactionDate: "10-30-2022",
    },
    {
      name: "Baby Kulot",
      vaccineName: "FluVac",
      category: "Anti Flu",
      vaccinationDate: "10-30-2022",
      transactionDate: "10-30-2022",
    },
    {
      name: "Baby Kulot",
      vaccineName: "FluVac",
      category: "Anti Flu",
      vaccinationDate: "10-30-2022",
      transactionDate: "10-30-2022",
    },
    {
      name: "Baby Kulot",
      vaccineName: "FluVac",
      category: "Anti Flu",
      vaccinationDate: "10-30-2022",
      transactionDate: "10-30-2022",
    },
    {
      name: "Baby Kulot",
      vaccineName: "FluVac",
      category: "Anti Flu",
      vaccinationDate: "10-30-2022",
      transactionDate: "10-30-2022",
    },
  ];

  const filterData = [
    {
      label: "Category",
      options: ["Category 1", "Category 2"],
      type: "select",
    },
    {
      label: "Vaccination Date",
      type: "date",
    },
    {
      label: "Transaction Date",
      type: "date",
    },
  ];

  const router = useRouter();
  const { page } = router.query || 1;

  const handleDeleteInfantVacination = () => {
    alert("INFANT VACCINATION SCHEDULE DELETED");
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
          <div>
            <SearchInput />
          </div>
        </div>
      </div>
      <TableComponent data={data} columns={columns} />
      <PaginationComponent page={page} numberOfPages={10} />

      {showConfirm && (
        <DeleteConfirmation
          closeModal={setShowConfirm}
          title="Are you sure you want to delete this infant vaccination schedule?"
          onAccept={handleDeleteInfantVacination}
        />
      )}
    </div>
  );
};

EmployeePendingInfants.getLayout = getEmployeeLayout;
export default EmployeePendingInfants;
