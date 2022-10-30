import React from "react";
import { getLayout } from "../../../components/Layout";
import UserForm from "../../../components/users/UserForm";

const ViewUser = () => {
  return <UserForm action="view" />;
};

ViewUser.getLayout = getLayout;
export default ViewUser;
