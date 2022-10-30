import React, { useState } from "react";
import { getLayout } from "../../components/Layout";
import TableComponent from "../../components/TableComponent";
import {
  DeleteButton,
  EditButton,
  PrimaryButton,
  SearchInput,
  ViewButton,
} from "../../components/Buttons";
import Link from "next/link";
import TableFilter from "../../components/TableFilter";
import PaginationComponent from "../../components/PaginationComponent";
import { useRouter } from "next/router";
import { DeleteConfirmation } from "../../components/Confirmation";

const Users = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const columns = [
    { label: "Full Name", column: "fullname", width: "40%" },
    { label: "Position", column: "position", width: "20%" },
    { label: "Status", column: "status", width: "20%" },
    {
      label: "",
      width: "20%",
      render: () => (
        <div className="w-56">
          <Link href="/admin/users/view" passHref>
            <ViewButton />
          </Link>
          <Link href="/admin/users/edit" passHref>
            <EditButton />
          </Link>
          <DeleteButton onClick={() => setShowConfirm(true)} />
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
    {
      id: "1",
      fullname: "John Benedict Taruc Regore",
      position: "Admin",
      status: "Active",
    },
  ];

  const filterData = [
    {
      label: "Position",
      options: ["Admin", "Employee"],
      type: "select",
    },
    {
      label: "Status",
      options: ["Active", "Inactive"],
      type: "select",
    },
  ];

  const router = useRouter();
  const { page } = router.query || 1;

  const handleDeleteUser = () => {
    alert("USER DELETED");
    setShowConfirm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-end mb-4">
        <div className="flex items-center">
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

        <div className="flex items-center">
          <div className="mr-6">
            <SearchInput />
          </div>
          <Link href="/admin/users/add" passHref>
            <PrimaryButton title="Add User" />
          </Link>
        </div>
      </div>
      <TableComponent data={data} columns={columns} />
      <PaginationComponent page={page} numberOfPages={10} />

      {showConfirm && (
        <DeleteConfirmation
          closeModal={setShowConfirm}
          title="Are you sure you want to delete this user?"
          onAccept={handleDeleteUser}
        />
      )}
    </div>
  );
};

Users.getLayout = getLayout;

export default Users;
