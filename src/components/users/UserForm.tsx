import Link from "next/link";
import React, { useState } from "react";
import { PrimaryButton } from "../Buttons";
import DeleteConfirmation, { AddConfirmation } from "../Confirmation";
import {
  StyledPasswordInput,
  StyledSelectInput,
  StyledTextInput,
} from "../Inputs";

interface UserFormProps {
  action: string;
}

const UserForm = ({ action }: UserFormProps) => {
  const positionOptions = ["Admin", "Employee"];
  const statusOptions = ["Active"];
  return (
    <>
      {action === "add" ? (
        <AddForm
          positionOptions={positionOptions}
          statusOptions={statusOptions}
        />
      ) : action === "edit" ? (
        <EditForm
          positionOptions={positionOptions}
          statusOptions={statusOptions}
        />
      ) : (
        <ViewForm />
      )}
    </>
  );
};

interface FormProps {
  positionOptions?: string[];
  statusOptions?: string[];
}

const AddForm = ({ positionOptions, statusOptions }: FormProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    password: "",
    conf_password: "",
    position: "",
  });

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddUser = () => {
    // console.log("form:", formData);
    alert("USER ADDED");
    setShowConfirm(false);
  };

  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] h-[100%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">Add User</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6 ">
          <StyledTextInput
            title="First Name"
            onChange={handleChange}
            name="firstname"
            value={formData.firstname}
          />
          <StyledTextInput
            title="Middle Name"
            onChange={handleChange}
            name="middlename"
            value={formData.middlename}
          />
          <StyledTextInput
            title="Last Name"
            onChange={handleChange}
            name="lastname"
            value={formData.lastname}
          />
          <StyledSelectInput
            title="Position"
            options={positionOptions}
            onChange={handleChange}
            name="position"
            value={formData.position}
          />
          <StyledTextInput
            title="Username"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />
          <StyledSelectInput
            title="Status"
            options={statusOptions}
            isDisabled
          />
          <StyledPasswordInput
            title="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          <StyledPasswordInput
            title="Confirm Password"
            onChange={handleChange}
            name="conf_password"
            value={formData.conf_password}
          />
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
          title="Are you sure you want to add this user?"
          closeModal={setShowConfirm}
          onAccept={handleAddUser}
        />
      )}
    </div>
  );
};

const EditForm = ({ positionOptions, statusOptions }: FormProps) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleUpdateUser = () => {
    alert("USER UPDATED");
    setShowConfirm(false);
  };
  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] h-[100%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">Update User</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6 ">
          <StyledTextInput title="First Name" />
          <StyledTextInput title="Middle Name" />
          <StyledTextInput title="Last Name" />
          <StyledSelectInput title="Position" options={positionOptions} />
          <StyledTextInput title="Username" />
          <StyledSelectInput
            title="Status"
            options={statusOptions}
            isDisabled
          />
          <StyledPasswordInput title="Password" />
          <StyledPasswordInput title="Confirm Password" />
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
          title="Are you sure you want to update this user?"
          onAccept={handleUpdateUser}
        />
      )}
    </div>
  );
};

const ViewForm = () => {
  return (
    <div className="w-full min-h-[calc(100vh-157px)] bg-white rounded-md py-4 px-6 pt-8">
      <div className="w-[50%] h-[100%] mx-auto">
        <p className="text-[#525F7F] font-bold text-lg">View User</p>
        <div className="w-full h-[1.3px] mt-2 rounded-sm bg-[#818ca6]" />

        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6 ">
          <StyledTextInput title="First Name" isDisabled />
          <StyledTextInput title="Middle Name" isDisabled />
          <StyledTextInput title="Last Name" isDisabled />
          <StyledSelectInput title="Position" isDisabled />
          <StyledTextInput title="Username" isDisabled />
          <StyledSelectInput title="Status" isDisabled />
          <StyledPasswordInput title="Password" isDisabled />
          <StyledPasswordInput title="Confirm Password" isDisabled />
        </div>

        <div className="float-right">
          <Link href="/admin/users/edit" passHref>
            <PrimaryButton title="Edit" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
