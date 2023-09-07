import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CompanyRoute = ({ children }) => {
// const { userInfo } = useSelector((state) => state.signIn);
// return userInfo && userInfo.role === "company" ? children : <Navigate to="/" />;
const { userInfo } = useSelector((state) => state.signIn);
return userInfo && userInfo.role === "company" ? (
  children
) : (
  <Navigate to="/login" />
);
};

export default CompanyRoute;
