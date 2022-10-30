import React from "react";
import { getLayout } from "../../../components/Layout";
import ResidentForm from "../../../components/residents/ResidentForm";

const ViewResident = () => {
  return <ResidentForm action="view" />;
};

ViewResident.getLayout = getLayout;
export default ViewResident;
