import React from "react";
import { getLayout } from "../../../components/Layout";
import ResidentForm from "../../../components/residents/ResidentForm";

const EditResident = () => {
  return <ResidentForm action="edit" />;
};

EditResident.getLayout = getLayout;
export default EditResident;
