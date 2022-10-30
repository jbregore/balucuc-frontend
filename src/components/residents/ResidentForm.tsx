import React, { useState } from "react";
import { PrimaryButton } from "../Buttons";
import { StyledDateInput, StyledSelectInput, StyledTextInput } from "../Inputs";
import { TfiPencil } from "react-icons/tfi";
import { AddConfirmation } from "../Confirmation";
// import ResidentCategoryModal from "./ResidentCategoryModal";
import { AiFillCamera } from "react-icons/ai";
import ResidentCategoryModal from "./ResidentCategoryModal";
import Link from "next/link";

interface ResidentFormProps {
  action: string;
  isEmployee?: boolean;
}

const ResidentForm = ({ action, isEmployee }: ResidentFormProps) => {
  const genderOptions = ["Male", "Female"];
  const familyPositionOptions = ["Head of the fam", "Member"];
  const civilStatusOptions = [
    "Single",
    "Married",
    "Widowed",
    "Divorced",
    "Separeted",
  ];
  const categoryOptions = ["Category 1", "Category 2"];
  return (
    <>
      {action === "add" ? (
        <AddForm
          genderOptions={genderOptions}
          familyPositionOptions={familyPositionOptions}
          civilStatusOptions={civilStatusOptions}
          categoryOptions={categoryOptions}
          isEmployee={isEmployee}
        />
      ) : action === "edit" ? (
        <EditForm
          genderOptions={genderOptions}
          familyPositionOptions={familyPositionOptions}
          civilStatusOptions={civilStatusOptions}
          categoryOptions={categoryOptions}
          isEmployee={isEmployee}
        />
      ) : (
        <ViewForm isEmployee={isEmployee} />
      )}
    </>
  );
};

interface FormProps {
  familyPositionOptions?: string[];
  genderOptions?: string[];
  civilStatusOptions?: string[];
  categoryOptions?: string[];
  isEmployee?: boolean;
}

const AddForm = ({
  familyPositionOptions,
  genderOptions,
  civilStatusOptions,
  categoryOptions,
  isEmployee,
}: FormProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewResidentCategory, setViewResidentCategory] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    birthdate: "",
    family_position: "",
    street: "",
    barangay: "",
    province: "",
    city: "",
    occupation: "",
    civil_status: "",
    category: "",
    pwd_specification: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddResident = () => {
    alert("RESIDENT ADDED");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-217px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[90%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">Add Resident</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="flex w-full ">
          <div className="w-[25%] h-full pr-4 pt-4 relative">
            <div className="absolute bottom-0 right-14 cursor-pointer bg-violet-300 rounded-[50%] p-2">
              <AiFillCamera size={30} color="white" />
            </div>
            <div className="w-[200px] h-[200px] bg-slate-200 rounded-[50%]"></div>
          </div>
          <div className="w-[75%] pb-6">
            <div className="grid gap-6 mb-6 md:grid-cols-3 mt-6 ">
              <StyledTextInput
                title="First Name"
                onChange={handleChange}
                name="first_name"
                value={formData.first_name}
              />

              <StyledTextInput
                title="Middle Name"
                onChange={handleChange}
                name="middle_name"
                value={formData.middle_name}
              />

              <StyledTextInput
                title="Last Name"
                onChange={handleChange}
                name="last_name"
                value={formData.last_name}
              />

              <StyledSelectInput
                title="Gender"
                options={genderOptions}
                onChange={handleChange}
                name="gender"
                value={formData.gender}
              />

              <StyledDateInput
                title="BirthDate"
                onChange={handleChange}
                name="birthdate"
                value={formData.birthdate}
              />

              <StyledSelectInput
                title="Family Position"
                options={familyPositionOptions}
                onChange={handleChange}
                name="family_position"
                value={formData.family_position}
              />

              <StyledTextInput
                title="Street"
                onChange={handleChange}
                name="street"
                value={formData.street}
              />

              <StyledTextInput
                title="Barangay"
                onChange={handleChange}
                name="barangay"
                value={formData.barangay}
              />

              <StyledTextInput
                title="Province"
                onChange={handleChange}
                name="province"
                value={formData.province}
              />

              <StyledTextInput
                title="City"
                onChange={handleChange}
                name="city"
                value={formData.city}
              />

              <StyledTextInput
                title="Occupation"
                onChange={handleChange}
                name="occupation"
                value={formData.occupation}
              />

              <StyledSelectInput
                title="Civil Status"
                options={civilStatusOptions}
                onChange={handleChange}
                name="civil_status"
                value={formData.civil_status}
              />

              {isEmployee ? (
                <StyledSelectInput
                  title="Category"
                  options={categoryOptions}
                  onChange={handleChange}
                  name="category"
                  value={formData.category}
                />
              ) : (
                <div className="relative">
                  <div
                    onClick={() => setViewResidentCategory(true)}
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
              )}

              <StyledTextInput
                title="PWD Specification"
                onChange={handleChange}
                name="pwd_specification"
                value={formData.pwd_specification}
              />
            </div>

            <div className="text-right">
              <PrimaryButton
                title="Save Changes"
                onClick={() => setShowConfirm(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {showConfirm && (
        <AddConfirmation
          closeModal={setShowConfirm}
          onAccept={handleAddResident}
          title="Are you sure you want to add this resident?"
        />
      )}
      {viewResidentCategory && (
        <ResidentCategoryModal closeModal={setViewResidentCategory} />
      )}
    </div>
  );
};

// ************************ EDIT ************************ //
const EditForm = ({
  familyPositionOptions,
  genderOptions,
  civilStatusOptions,
  categoryOptions,
  isEmployee,
}: FormProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewResidentCategory, setViewResidentCategory] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    birthdate: "",
    family_position: "",
    street: "",
    barangay: "",
    province: "",
    city: "",
    occupation: "",
    civil_status: "",
    category: "",
    pwd_specification: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditResident = () => {
    alert("RESIDENT UPDATED");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-217px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[90%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">Update Resident</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="flex w-full ">
          <div className="w-[25%] h-full pr-4 pt-4 relative">
            <div className="absolute bottom-0 right-14 cursor-pointer bg-violet-300 rounded-[50%] p-2">
              <AiFillCamera size={30} color="white" />
            </div>
            <div className="w-[200px] h-[200px] bg-slate-200 rounded-[50%]"></div>
          </div>
          <div className="w-[75%] pb-6">
            <div className="grid gap-6 mb-6 md:grid-cols-3 mt-6 ">
              <StyledTextInput
                title="First Name"
                onChange={handleChange}
                name="first_name"
                value={formData.first_name}
              />

              <StyledTextInput
                title="Middle Name"
                onChange={handleChange}
                name="middle_name"
                value={formData.middle_name}
              />

              <StyledTextInput
                title="Last Name"
                onChange={handleChange}
                name="last_name"
                value={formData.last_name}
              />

              <StyledSelectInput
                title="Gender"
                options={genderOptions}
                onChange={handleChange}
                name="gender"
                value={formData.gender}
              />

              <StyledDateInput
                title="BirthDate"
                onChange={handleChange}
                name="birthdate"
                value={formData.birthdate}
              />

              <StyledSelectInput
                title="Family Position"
                options={familyPositionOptions}
                onChange={handleChange}
                name="family_position"
                value={formData.family_position}
              />

              <StyledTextInput
                title="Street"
                onChange={handleChange}
                name="street"
                value={formData.street}
              />

              <StyledTextInput
                title="Barangay"
                onChange={handleChange}
                name="barangay"
                value={formData.barangay}
              />

              <StyledTextInput
                title="Province"
                onChange={handleChange}
                name="province"
                value={formData.province}
              />

              <StyledTextInput
                title="City"
                onChange={handleChange}
                name="city"
                value={formData.city}
              />

              <StyledTextInput
                title="Occupation"
                onChange={handleChange}
                name="occupation"
                value={formData.occupation}
              />

              <StyledSelectInput
                title="Civil Status"
                options={civilStatusOptions}
                onChange={handleChange}
                name="civil_status"
                value={formData.civil_status}
              />

              {isEmployee ? (
                <StyledSelectInput
                  title="Category"
                  options={categoryOptions}
                  onChange={handleChange}
                  name="category"
                  value={formData.category}
                />
              ) : (
                <div className="relative">
                  <div
                    onClick={() => setViewResidentCategory(true)}
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
              )}

              <StyledTextInput
                title="PWD Specification"
                onChange={handleChange}
                name="pwd_specification"
                value={formData.pwd_specification}
              />
            </div>

            <div className="text-right">
              <PrimaryButton
                title="Save Changes"
                onClick={() => setShowConfirm(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {showConfirm && (
        <AddConfirmation
          closeModal={setShowConfirm}
          onAccept={handleEditResident}
          title="Are you sure you want to update this resident?"
        />
      )}
      {viewResidentCategory && (
        <ResidentCategoryModal closeModal={setViewResidentCategory} />
      )}
    </div>
  );
};

// ************************ VIEW ************************ //
const ViewForm = ({ isEmployee }: FormProps) => {
  return (
    <div className="w-full min-h-[calc(100vh-217px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[90%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">View Resident</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="flex w-full ">
          <div className="w-[25%] h-full pr-4 pt-4 relative">
            <div className="absolute bottom-0 right-14 cursor-pointer bg-violet-300 rounded-[50%] p-2">
              <AiFillCamera size={30} color="white" />
            </div>
            <div className="w-[200px] h-[200px] bg-slate-200 rounded-[50%]"></div>
          </div>
          <div className="w-[75%] pb-6">
            <div className="grid gap-6 mb-6 md:grid-cols-3 mt-6 ">
              <StyledTextInput title="First Name" isDisabled />

              <StyledTextInput title="Middle Name" isDisabled />

              <StyledTextInput title="Last Name" isDisabled />

              <StyledSelectInput title="Gender" isDisabled />

              <StyledDateInput title="BirthDate" isDisabled />

              <StyledSelectInput title="Family Position" isDisabled />

              <StyledTextInput title="Street" isDisabled />

              <StyledTextInput title="Barangay" isDisabled />

              <StyledTextInput title="Province" isDisabled />

              <StyledTextInput title="City" isDisabled />

              <StyledTextInput title="Occupation" isDisabled />

              <StyledSelectInput title="Civil Status" isDisabled />

              <StyledSelectInput title="Category" isDisabled />

              <StyledTextInput title="PWD Specification" isDisabled />
            </div>

            <div className="text-right">
              {isEmployee ? (
                <Link href="/employee/residents/edit" passHref>
                  <PrimaryButton title="Edit" />
                </Link>
              ) : (
                <Link href="/admin/residents/edit" passHref>
                  <PrimaryButton title="Edit" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResidentForm;
