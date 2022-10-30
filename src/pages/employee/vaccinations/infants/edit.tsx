import React, { useState } from "react";
import { PrimaryButton } from "../../../../components/Buttons";
import { AddConfirmation } from "../../../../components/Confirmation";
import { getEmployeeLayout } from "../../../../components/EmployeeLayout";
import {
  StyledDateInput,
  StyledTextInput,
} from "../../../../components/Inputs";

const EmployeeInfantsVaccinationEdit = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    vaccination_date: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegisterInfant = () => {
    alert("INFANT SCHEDULE UPDATED SUCCESSFULLY");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] mx-auto pb-2">
        <p className="text-[#525F7F] font-bold text-lg">
          Update Infant Schedule for Immunization
        </p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="pt-4">
          <StyledTextInput title="Vaccine Name" isDisabled />
          <br />
          <StyledTextInput title="Category" isDisabled />
          <br />
          <StyledTextInput
            title="Infant Name:"
            // onChange={handleChange}
            // name="handout_to"
            // value={formData.handout_to}
          />
          <br />
          <StyledDateInput
            title="Vaccination Date"
            onChange={handleChange}
            name="vaccination_date"
            value={formData.vaccination_date}
          />
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
          onAccept={handleRegisterInfant}
          title="Are you sure you want to update this infant schedule for immunization?"
        />
      )}
    </div>
  );
};

EmployeeInfantsVaccinationEdit.getLayout = getEmployeeLayout;
export default EmployeeInfantsVaccinationEdit;
