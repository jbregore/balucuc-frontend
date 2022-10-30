import React, { useState } from "react";
import { PrimaryButton } from "../Buttons";
import { StyledDateInput, StyledSelectInput, StyledTextInput } from "../Inputs";
import { TfiPencil } from "react-icons/tfi";
import { AddConfirmation } from "../Confirmation";
import MedicineCategoryModal from "./MedicineCategoryModal";
import Link from "next/link";

interface MedicineFormProps {
  action: string;
}

const MedicineForm = ({ action }: MedicineFormProps) => {
  const measurementOptions = ["mg", "ml"];
  const categoryOptions = ["Test Category 1", "Test Category 2"];
  return (
    <>
      {action === "add" ? (
        <AddForm
          measurementOptions={measurementOptions}
          categoryOptions={categoryOptions}
        />
      ) : action === "edit" ? (
        <EditForm
          measurementOptions={measurementOptions}
          categoryOptions={categoryOptions}
        />
      ) : (
        <ViewForm />
      )}
    </>
  );
};

interface FormProps {
  measurementOptions?: string[];
  categoryOptions?: string[];
}

const AddForm = ({ measurementOptions, categoryOptions }: FormProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewMedicineCategory, setViewMedicineCategory] = useState(false);

  const [formData, setFormData] = useState({
    generic_name: "",
    brand_name: "",
    metric_measurement: "",
    measurement: "",
    quantity: "",
    category: "",
    manufactured_date: "",
    expiration_date: "",
    batch_no: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddMedicine = () => {
    alert("MEDICINE ADDED");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] mx-auto pb-2">
        <p className="text-[#525F7F] font-bold text-lg">Add Medicine</p>
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
            title="Generic Name"
            onChange={handleChange}
            name="generic_name"
            value={formData.generic_name}
          />
          <StyledTextInput
            title="Brand Name"
            onChange={handleChange}
            name="brand_name"
            value={formData.brand_name}
          />

          <StyledTextInput
            title="Measurement Value"
            onChange={handleChange}
            name="measurement"
            value={formData.measurement}
            isNumber
          />

          <StyledSelectInput
            title="Metric Measurement"
            options={measurementOptions}
            onChange={handleChange}
            name="metric_measurement"
            value={formData.metric_measurement}
          />

          <StyledTextInput
            title="Quantity"
            onChange={handleChange}
            name="quantity"
            value={formData.quantity}
            isNumber
          />

          <div className="relative">
            <div
              onClick={() => setViewMedicineCategory(true)}
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
        </div>

        <div className="text-right">
          <PrimaryButton
            title="Save Changes"
            onClick={() => setShowConfirm(true)}
          />
        </div>
      </div>
      {showConfirm && (
        <AddConfirmation
          closeModal={setShowConfirm}
          onAccept={handleAddMedicine}
          title="Are you sure you want to add this medicine?"
        />
      )}
      {viewMedicineCategory && (
        <MedicineCategoryModal closeModal={setViewMedicineCategory} />
      )}
    </div>
  );
};

const EditForm = ({ measurementOptions, categoryOptions }: FormProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewMedicineCategory, setViewMedicineCategory] = useState(false);

  const [formData, setFormData] = useState({
    generic_name: "",
    brand_name: "",
    metric_measurement: "",
    measurement: "",
    quantity: "",
    category: "",
    manufactured_date: "",
    expiration_date: "",
    batch_no: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddMedicine = () => {
    alert("MEDICINE UPDATED");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] h-[100%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">Update Medicine</p>
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
            title="Generic Name"
            onChange={handleChange}
            name="generic_name"
            value={formData.generic_name}
          />
          <StyledTextInput
            title="Brand Name"
            onChange={handleChange}
            name="brand_name"
            value={formData.brand_name}
          />

          <StyledTextInput
            title="Measurement Value"
            onChange={handleChange}
            name="measurement"
            value={formData.measurement}
            isNumber
          />

          <StyledSelectInput
            title="Metric Measurement"
            options={measurementOptions}
            onChange={handleChange}
            name="metric_measurement"
            value={formData.metric_measurement}
          />

          <StyledTextInput
            title="Quantity"
            onChange={handleChange}
            name="quantity"
            value={formData.quantity}
            isNumber
          />

          <div className="relative">
            <div
              onClick={() => setViewMedicineCategory(true)}
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
        </div>

        <div className="text-right">
          <PrimaryButton
            title="Save Changes"
            onClick={() => setShowConfirm(true)}
          />
        </div>
      </div>
      {showConfirm && (
        <AddConfirmation
          closeModal={setShowConfirm}
          onAccept={handleAddMedicine}
          title="Are you sure you want to update this medicine?"
        />
      )}
      {viewMedicineCategory && (
        <MedicineCategoryModal closeModal={setViewMedicineCategory} />
      )}
    </div>
  );
};

const ViewForm = () => {
  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] h-[100%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">View Medicine</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6 ">
          <StyledTextInput title="Batch no." isDisabled />

          <StyledTextInput title="Generic Name" isDisabled />
          <StyledTextInput title="Brand Name" isDisabled />

          <StyledTextInput title="Measurement Value" isDisabled />

          <StyledSelectInput title="Metric Measurement" isDisabled />

          <StyledTextInput title="Quantity" isDisabled />

          <StyledSelectInput title="Category" isDisabled />

          <StyledDateInput title="Manufactured Date" isDisabled />

          <StyledDateInput title="Expiration Date" isDisabled />
        </div>

        <div className="text-right">
          <Link href="/admin/medicines/edit" passHref>
            <PrimaryButton title="Edit" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MedicineForm;
