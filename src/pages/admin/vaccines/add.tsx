import React from "react";
import { getLayout } from "../../../components/Layout";
import VaccineForm from "../../../components/vaccines/VaccineForm";

const AddVaccine = () => {
  return <VaccineForm action="add" />;
};

AddVaccine.getLayout = getLayout;
export default AddVaccine;
