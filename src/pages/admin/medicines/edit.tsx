import React from "react";
import { getLayout } from "../../../components/Layout";
import MedicineForm from "../../../components/medicines/MedicineForm";

const EditMedicine = () => {
  return <MedicineForm action="edit" />;
};

EditMedicine.getLayout = getLayout;
export default EditMedicine;
