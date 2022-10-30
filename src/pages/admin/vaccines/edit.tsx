import React from "react";
import { getLayout } from "../../../components/Layout";
import VaccineForm from "../../../components/vaccines/VaccineForm";

const EditVaccine = () => {
  return <VaccineForm action="edit" />;
};

EditVaccine.getLayout = getLayout;
export default EditVaccine;
