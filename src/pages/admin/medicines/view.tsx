import React from "react";
import { getLayout } from "../../../components/Layout";
import MedicineForm from "../../../components/medicines/MedicineForm";

const ViewMedicine = () => {
  return <MedicineForm action="view" />;
};

ViewMedicine.getLayout = getLayout;
export default ViewMedicine;
