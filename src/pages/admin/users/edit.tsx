import React from "react";
import { getLayout } from "../../../components/Layout";
import UserForm from "../../../components/users/UserForm";

const EditUser = () => {
  return <UserForm action="edit" />;
};

EditUser.getLayout = getLayout;
export default EditUser;
