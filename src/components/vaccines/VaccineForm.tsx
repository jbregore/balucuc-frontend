import React, { useState } from "react";
import { PrimaryButton } from "../Buttons";
import { StyledDateInput, StyledSelectInput, StyledTextInput } from "../Inputs";
import { TfiPencil } from "react-icons/tfi";
import { AddConfirmation } from "../Confirmation";
import VaccineCategoryModal from "./VaccineCategoryModal";
import Link from "next/link";

interface VaccineFormProps {
  action: string;
}

const VaccineForm = ({ action }: VaccineFormProps) => {
  const categoryOptions = ["Test Category 1", "Test Category 2"];
  return (
    <>
      {/* <AddForm categoryOptions={categoryOptions} /> */}
      {action === "add" ? (
        <AddForm categoryOptions={categoryOptions} />
      ) : action === "edit" ? (
        <EditForm categoryOptions={categoryOptions} />
      ) : (
        <ViewForm />
      )}
    </>
  );
};

interface FormProps {
  categoryOptions?: string[];
}

const AddForm = ({ categoryOptions }: FormProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewVaccineCategory, setViewVaccineCategory] = useState(false);

  const [formData, setFormData] = useState({
    vaccine_name: "",
    vaccine_quantity: "",
    manufactured_date: "",
    expiration_date: "",
    category: "",
    batch_no: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddVaccine = () => {
    alert("VACCINE ADDED");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] h-[100%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">Add Vaccine</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6 ">
          <StyledTextInput
            title="Batch no."
            onChange={handleChange}
            name="batch_no"
            value={formData.batch_no}
            isNumber
          />

          <StyledTextInput
            title="Vaccine Name"
            onChange={handleChange}
            name="vaccine_name"
            value={formData.vaccine_name}
          />
          <StyledTextInput
            title="Vaccine Quantity"
            onChange={handleChange}
            name="vaccine_quantity"
            value={formData.vaccine_quantity}
            isNumber
          />

          <StyledDateInput
            title="Manufactured Date"
            onChange={handleChange}
            name="manufactured_date"
            value={formData.manufactured_date}
          />

          <StyledDateInput
            title="Expiration Date"
            onChange={handleChange}
            name="expiration_date"
            value={formData.expiration_date}
          />

          <div className="relative">
            <div
              onClick={() => setViewVaccineCategory(true)}
              className="absolute top-0 right-0 cursor-pointer hover:bg-gray-200 p-2 rounded-[50%] -mt-2"
            >
              <TfiPencil size={20} color="blue" />
            </div>
            <StyledSelectInput
              title="Category"
              options={categoryOptions}
              onChange={handleChange}
              name="category"
              value={formData.category}
            />
          </div>
        </div>

        <div className="float-right">
          <PrimaryButton
            title="Save Changes"
            onClick={() => setShowConfirm(true)}
          />
        </div>
      </div>
      {showConfirm && (
        <AddConfirmation
          closeModal={setShowConfirm}
          onAccept={handleAddVaccine}
          title="Are you sure you want to add this vaccine?"
        />
      )}
      {viewVaccineCategory && (
        <VaccineCategoryModal closeModal={setViewVaccineCategory} />
      )}
    </div>
  );
};

const EditForm = ({ categoryOptions }: FormProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewVaccineCategory, setViewVaccineCategory] = useState(false);

  const [formData, setFormData] = useState({
    vaccine_name: "",
    vaccine_quantity: "",
    manufactured_date: "",
    expiration_date: "",
    category: "",
    batch_no: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdateVaccine = () => {
    alert("VACCINE UPDATED");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] h-[100%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">Update Vaccine</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6 ">
          <StyledTextInput
            title="Batch no."
            onChange={handleChange}
            name="batch_no"
            value={formData.batch_no}
            isNumber
          />

          <StyledTextInput
            title="Vaccine Name"
            onChange={handleChange}
            name="vaccine_name"
            value={formData.vaccine_name}
          />
          <StyledTextInput
            title="Vaccine Quantity"
            onChange={handleChange}
            name="vaccine_quantity"
            value={formData.vaccine_quantity}
            isNumber
          />

          <StyledDateInput
            title="Manufactured Date"
            onChange={handleChange}
            name="manufactured_date"
            value={formData.manufactured_date}
          />

          <StyledDateInput
            title="Expiration Date"
            onChange={handleChange}
            name="expiration_date"
            value={formData.expiration_date}
          />

          <div className="relative">
            <div
              onClick={() => setViewVaccineCategory(true)}
              className="absolute top-0 right-0 cursor-pointer hover:bg-gray-200 p-2 rounded-[50%] -mt-2"
            >
              <TfiPencil size={20} color="blue" />
            </div>
            <StyledSelectInput
              title="Category"
              options={categoryOptions}
              onChange={handleChange}
              name="category"
              value={formData.category}
            />
          </div>
        </div>

        <div className="float-right">
          <PrimaryButton
            title="Save Changes"
            onClick={() => setShowConfirm(true)}
          />
        </div>
      </div>
      {showConfirm && (
        <AddConfirmation
          closeModal={setShowConfirm}
          onAccept={handleUpdateVaccine}
          title="Are you sure you want to update this vaccine?"
        />
      )}
      {viewVaccineCategory && (
        <VaccineCategoryModal closeModal={setViewVaccineCategory} />
      )}
    </div>
  );
};

const ViewForm = () => {
  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] h-[100%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">View Vaccine</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6 ">
          <StyledTextInput title="Batch no." isDisabled />
          <StyledTextInput title="Vaccine Name" isDisabled />
          <StyledTextInput title="Vaccine Quantity" isDisabled />

          <StyledDateInput title="Manufactured Date" isDisabled />

          <StyledDateInput title="Expiration Date" isDisabled />

          <StyledSelectInput title="Category" isDisabled />
        </div>

        <div className="float-right">
          <Link href="/admin/vaccines/edit" passHref>
            <PrimaryButton title="Edit" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VaccineForm;
