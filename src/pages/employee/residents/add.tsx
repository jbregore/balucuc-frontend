import React from "react";
import { getEmployeeLayout } from "../../../components/EmployeeLayout";
import ResidentForm from "../../../components/residents/ResidentForm";

const AddResident = () => {
  return <ResidentForm action="add" isEmployee />;
};

AddResident.getLayout = getEmployeeLayout;
export default AddResident;
