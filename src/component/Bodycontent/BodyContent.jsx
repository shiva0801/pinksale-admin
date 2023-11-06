import React from "react";
import "./BodyContent.css";
import { Outlet } from "react-router-dom";

const BodyContent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default BodyContent;
