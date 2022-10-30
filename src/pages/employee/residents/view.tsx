import React from "react";
import { getEmployeeLayout } from "../../../components/EmployeeLayout";
import ResidentForm from "../../../components/residents/ResidentForm";

const ViewResident = () => {
  return <ResidentForm action="view" isEmployee />;
};

ViewResident.getLayout = getEmployeeLayout;
export default ViewResident;
