import React from "react";
import { getLayout } from "../../../components/Layout";
import MedicineForm from "../../../components/medicines/MedicineForm";

const AddMedicine = () => {
  return <MedicineForm action="add" />;
};

AddMedicine.getLayout = getLayout;
export default AddMedicine;
