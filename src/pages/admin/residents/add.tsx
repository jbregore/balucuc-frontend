import React from "react";
import { getLayout } from "../../../components/Layout";
import ResidentForm from "../../../components/residents/ResidentForm";

const AddResident = () => {
  return <ResidentForm action="add" />;
};

AddResident.getLayout = getLayout;
export default AddResident;
