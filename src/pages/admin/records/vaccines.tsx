import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PrimaryButton, SearchInput } from "../../../components/Buttons";
import { getLayout } from "../../../components/Layout";
import PaginationComponent from "../../../components/PaginationComponent";
import TableComponent from "../../../components/TableComponent";
import TableFilter from "../../../components/TableFilter";

const RecordVaccines = () => {
  const columns = [
    { label: "Infant Full Name", column: "infantName", width: "30%" },
    { label: "Vaccine Name", column: "vaccineName", width: "20%" },
    { label: "Category", column: "category", width: "15%" },
    { label: "Dozes", column: "dozes", width: "10" },
    { label: "Date Vaccinated", column: "dateVaccinated", width: "25%" },
  ];

  const data = [
    {
      infantName: "Baby cologne",
      vaccineName: "Anti Polio",
      category: "Polio",
      dozes: 2,
      dateVaccinated: "10-30-2022",
    },
    {
      infantName: "Baby cologne",
      vaccineName: "Anti Polio",
      category: "Polio",
      dozes: 2,
      dateVaccinated: "10-30-2022",
    },
    {
      infantName: "Baby cologne",
      vaccineName: "Anti Polio",
      category: "Polio",
      dozes: 2,
      dateVaccinated: "10-30-2022",
    },
    {
      infantName: "Baby cologne",
      vaccineName: "Anti Polio",
      category: "Polio",
      dozes: 2,
      dateVaccinated: "10-30-2022",
    },
    {
      infantName: "Baby cologne",
      vaccineName: "Anti Polio",
      category: "Polio",
      dozes: 2,
      dateVaccinated: "10-30-2022",
    },
  ];

  const filterData = [
    {
      label: "Vaccine Name",
      options: ["Category 1", "Category 2"],
      type: "select",
    },
    {
      label: "Category",
      options: ["Category 1", "Category 2"],
      type: "select",
    },
    {
      label: "Date Vaccinated",
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
            Vaccine Records
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

RecordVaccines.getLayout = getLayout;

export default RecordVaccines;
