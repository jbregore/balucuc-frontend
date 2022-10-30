import React, { useState } from "react";
import { PrimaryButton } from "../../../components/Buttons";
import { AddConfirmation } from "../../../components/Confirmation";
import { getEmployeeLayout } from "../../../components/EmployeeLayout";
import { StyledTextInput } from "../../../components/Inputs";

const EmployeeHandout = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    quantity: "",
    handout_to: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHandoutMedicine = () => {
    alert("MEDICINE HANDOUT SUCCESSFULLY");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] mx-auto pb-2">
        <p className="text-[#525F7F] font-bold text-lg">Handout Medicine</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="pt-4">
          <StyledTextInput title="Brand Name" isDisabled />
          <br />
          <StyledTextInput title="Generic Name" isDisabled />
          <br />
          <StyledTextInput title="Category" isDisabled />
          <br />
          <StyledTextInput
            title="Handout to:"
            onChange={handleChange}
            name="handout_to"
            value={formData.handout_to}
          />
          <br />

          <div className="relative">
            <div className="absolute top-0 right-0 cursor-pointer  p-2 rounded-[50%] -mt-2">
              <p className="block mb-2 text-sm font-medium text-[#525F7F] dark:text-gray-300">
                Available stocks: 9999
              </p>
            </div>
            <StyledTextInput
              title="Quantity"
              onChange={handleChange}
              name="quantity"
              value={formData.quantity}
              isNumber
            />
          </div>

          <br />
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
          onAccept={handleHandoutMedicine}
          title="Are you sure you want to handout this medicine?"
        />
      )}
      {/*
      {viewMedicineCategory && (
        <MedicineCategoryModal closeModal={setViewMedicineCategory} />
      )} */}
    </div>
  );
};

EmployeeHandout.getLayout = getEmployeeLayout;
export default EmployeeHandout;
