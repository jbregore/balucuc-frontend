import React from "react";
import { getLayout } from "../../../components/Layout";
import UserForm from "../../../components/users/UserForm";

const AddUser = () => {
  return <UserForm action="add" />;
};

AddUser.getLayout = getLayout;
export default AddUser;
