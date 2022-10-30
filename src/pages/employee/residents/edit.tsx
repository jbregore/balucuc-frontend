import React from "react";
import { getEmployeeLayout } from "../../../components/EmployeeLayout";
import ResidentForm from "../../../components/residents/ResidentForm";

const EditResident = () => {
  return <ResidentForm action="edit" isEmployee />;
};

EditResident.getLayout = getEmployeeLayout;
export default EditResident;
