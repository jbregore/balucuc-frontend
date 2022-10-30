import React from "react";
import { getLayout } from "../../../components/Layout";
import VaccineForm from "../../../components/vaccines/VaccineForm";

const ViewVaccine = () => {
  return <VaccineForm action="view" />;
};

ViewVaccine.getLayout = getLayout;
export default ViewVaccine;
